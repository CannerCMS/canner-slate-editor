// @flow

import type { Change } from "slate";

// constant
import { KEY_ENTER, KEY_SPACE } from "./constant/keys";
import DEFAULT_LIST from "./constant/list";
import BLOCKS from "markup-it/lib/constants/blocks";
import MARKS from "markup-it/lib/constants/marks";
import INLINES from "markup-it/lib/constants/inlines";

// handler
import onEnter from "./handler/onEnter";

// match
import matchBlockquote from "./match/blockquote";
import matchCodeBlock from "./match/codeBlock";
import matchCode from "./match/code";
import matchHeader from "./match/header";
import matchBold from "./match/bold";
import matchItalic from "./match/italic";
import matchStrikeThrough from './match/strikethrough';
import matchBoldItalic from "./match/boldItalic";
import matchHr from "./match/hr";
import matchImage from "./match/image";
import matchLink from "./match/link";
import matchList from "./match/list";

// plugins
import PluginEditCode from "slate-edit-code";

const codePlugin = PluginEditCode({
  onlyIn: node => node.type === "code_block"
});

const checkPatterns = function(options, change) {
  const { value } = change;
  const { texts } = value;
  const currentTextNode = texts.get(0);
  const currentLineText = currentTextNode.text;
  let matched;

  // if is in code block ignore matched patterns
  if (codePlugin.utils.isInCodeBlock(value)) {
    return;
  }

  // reference: https://github.com/PrismJS/prism/blob/gh-pages/components/prism-markdown.js
  // blocks
  if ((matched = currentLineText.match(/^>/m))) {
    // [blockquote] punctuation, blockquote
    return matchBlockquote(
      options.blocks.BLOCKQUOTE,
      currentTextNode,
      matched,
      change
    );
  } else if ((matched = currentLineText.match(/^(?: {3}|\t)/m))) {
    // [Code Block] Prefixed by 4 spaces or 1 tab
    return matchCodeBlock(options.codeOption, currentTextNode, matched, change);
  } else if ((matched = currentLineText.match(/^\s*```(\w+)?/m))) {
    // [Code block]
    // ```lang
    return matchCodeBlock(
      options.codeOption,
      currentTextNode,
      matched,
      change,
      matched[1]
    );
  } else if ((matched = currentLineText.match(/(^\s*)#{1,6}/m))) {
    // [Header] h1 ~ h6
    // # h1
    // ## h2
    // ###### h6
    return matchHeader(options.blocks, currentTextNode, matched, change);
  } else if (
    (matched = currentLineText.match(/(^\s*)([*-])(?:[\t ]*\2){2,}/m))
  ) {
    // [HR]
    // ***
    // ---
    // * * *
    // -----------
    return matchHr(options.blocks.HR, currentTextNode, matched, change);
  } else if ((matched = currentLineText.match(/((?:^\s*)(?:[*+-]))/m))) {
    // * item
    // + item
    // - item
    return matchList(
      options.listOption,
      currentTextNode,
      matched,
      change,
      false
    );
  } else if ((matched = currentLineText.match(/((?:^\s*)(?:\d+\.))/m))) {
    // 1. item
    return matchList(
      options.listOption,
      currentTextNode,
      matched,
      change,
      true
    );
  }

  const offsetBeforeSpace = value.selection.anchorOffset - 1;
  const lastChar = currentLineText.charAt(offsetBeforeSpace);
  const prevTextFromSpace = currentLineText.substr(0, offsetBeforeSpace + 1);

  // inline patterns
  if (
    (matched =
      lastChar === "`" && prevTextFromSpace.match(/\s?(`|``)((?!\1).)+?\1$/m))
  ) {
    // [Code] `code`
    return matchCode(options.marks.CODE, currentTextNode, matched, change);
  } else if (
    (matched = currentLineText.match(
      /!\[([^\]]+)\]\(([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?)\)/
    ))
  ) {
    // ![example](http://example.com "Optional title")
    return matchImage(options.inlines.IMAGE, currentTextNode, matched, change);
  } else if (
    (matched = currentLineText.match(
      /\[([^\]]+)\]\(([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?)\)/
    ))
  ) {
    // [example](http://example.com "Optional title")
    return matchLink(options.inlines.LINK, currentTextNode, matched, change);
  }

  if (lastChar === "*" || lastChar === "_") {
    if ((matched = prevTextFromSpace.match(/\s?(\*\*\*|___)((?!\1).)+?\1$/m))) {
      // [Bold + Italic] ***[strong + italic]***, ___[strong + italic]___
      return matchBoldItalic(options.marks, currentTextNode, matched, change);
    } else if (
      (matched = prevTextFromSpace.match(/\s?(\*\*|__)((?!\1).)+?\1$/m))
    ) {
      // [Bold] **strong**, __strong__
      return matchBold(options.marks.BOLD, currentTextNode, matched, change);
    } else if (
      (matched = prevTextFromSpace.match(/\s?(\*|_)((?!\1).)+?\1$/m))
    ) {
      // [Italic] _em_, *em*
      return matchItalic(
        options.marks.ITALIC,
        currentTextNode,
        matched,
        change
      );
    }
  }

  if (lastChar === "~") {
    if (
      (matched = prevTextFromSpace.match(/\s?(~)((?!\1).)+?\1$/m))
    ) {
      // [Strike Through] ~strikethrough~
      return matchStrikeThrough(
        options.marks.STRIKETHROUGH,
        currentTextNode,
        matched,
        change
      );
    }
  }
};

export default (opt: { [string]: any } = {}) => {
  const options = {
    blocks: Object.assign(BLOCKS, opt.blocks),
    marks: Object.assign(MARKS, opt.marks),
    inlines: Object.assign(INLINES, opt.inlines),
    codeOption: Object.assign(
      {
        onlyIn: node => node.type === BLOCKS.CODE
      },
      opt.codeOption
    ),
    blockquoteOption: Object.assign({}, opt.blockquoteOption),
    listOption: Object.assign(DEFAULT_LIST, opt.listOption)
  };

  return {
    onKeyDown: (e: any, change: Change) => {
      switch (e.key) {
        case KEY_ENTER:
          return onEnter(options, change);
        case KEY_SPACE:
          return checkPatterns(options, change);
      }
    }
  };
};
