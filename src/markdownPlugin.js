// @flow

import type {Change} from 'slate';
import renderMark from './renderMark';
import renderNode from './renderNode';

// handler
import onEnter from './handler/onEnter';

// match
import matchBlockquote from './match/blockquote';
import matchCodeBlock from './match/codeBlock';
import matchCode from './match/code';
import matchHeader from './match/header';
import matchBold from './match/bold';
import matchItalic from './match/italic';
import matchHr from './match/hr';
import matchImage from './match/image';
import matchLink from './match/link';
import matchList from './match/list';

// plugins
import PluginEditCode from 'slate-edit-code';

const codePlugin = PluginEditCode({
  onlyIn: node => node.type === 'code_block'
})


const KEY_ENTER = 'Enter';
const KEY_SPACE = ' ';

const checkPatterns = function(change) {
  const {value} = change;
  const {texts} = value;
  const currentTextNode = texts.get(0);
  const currentLineText = currentTextNode.text;
  const isSelectRange = (
    value.selection.anchorKey !== value.selection.focusKey
    || value.selection.anchorOffset !== value.selection.focusOffset
  );
  let matched;

  // if is in code block ignore matched patterns
  if (codePlugin.utils.isInCodeBlock(value)) {
    return;
  }

  // if it is not select in a range
  if (!isSelectRange) {
    // reference: https://github.com/PrismJS/prism/blob/gh-pages/components/prism-markdown.js
    // blocks
    if (matched = currentLineText.match(/^>/m)) {
      // [blockquote] punctuation, blockquote
      return matchBlockquote(currentTextNode, matched, change);
    } else if (matched = currentLineText.match(/^(?: {3}|\t)/m)) {
      // [Code Block] Prefixed by 4 spaces or 1 tab
      return matchCodeBlock(currentTextNode, matched, change);
    } else if (matched = currentLineText.match(/^\s*```(\w+)?/m)) {
      // [Code block]
      // ```lang
      return matchCodeBlock(currentTextNode, matched, change, matched[1]);
    } else if (matched = currentLineText.match(/(^\s*)#{1,6}/m)) {
      // [Header] h1 ~ h6
      // # h1
      // ## h2
      // ###### h6
      return matchHeader(currentTextNode, matched, change);
    } else if (matched = currentLineText.match(/(^\s*)([*-])(?:[\t ]*\2){2,}/m)) {
      // [HR]
      // ***
      // ---
      // * * *
      // -----------
      return matchHr(currentTextNode, matched, change);
    } else if (matched = currentLineText.match(/((?:^\s*)(?:[*+-]))/m)) {
      // * item
      // + item
      // - item
      return matchList(currentTextNode, matched, change, false);
    } else if (matched = currentLineText.match(/((?:^\s*)(?:\d+\.))/m)) {
      // 1. item
      return matchList(currentTextNode, matched, change, true);
    }

    const offsetBeforeSpace = value.selection.anchorOffset - 1;
    const lastChar = currentLineText.charAt(offsetBeforeSpace);
    const prevTextFromSpace = currentLineText.substr(0, offsetBeforeSpace + 1)

    // inline patterns
    if (matched = (lastChar === '`' && prevTextFromSpace.match(/\s?(`|``)((?!\1).)+?\1$/m))) {
      // [Code] `code`
      return matchCode(currentTextNode, matched, change);
    } else if (matched = currentLineText.match(/!\[([^\]]+)\]\(([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?)\)/)) {
      // ![example](http://example.com "Optional title")
      return matchImage(currentTextNode, matched, change);
    } else if (matched = currentLineText.match(/\[([^\]]+)\]\(([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?)\)/)) {
      // [example](http://example.com "Optional title")
      return matchLink(currentTextNode, matched, change);
    } else if (matched = ((lastChar === '*' || lastChar === '_') && prevTextFromSpace.match(/\s?(\*\*|__)((?!\1).)+?\1$/m))) {
      // [Bold] **strong**, __strong__
      return matchBold(currentTextNode, matched, change);
    } else if (matched = ((lastChar === '*' || lastChar === '_') && prevTextFromSpace.match(/\s?(\*|_)((?!\1).)+?\1$/m))) {
      // [Italic] _em_, *em*
      return matchItalic(currentTextNode, matched, change);
    }
  }
}

const MarkdownPlugin = () => {

  return {
    renderMark: renderMark,
    renderNode: renderNode,
    onKeyDown: (e: any, change: Change) => {
      switch (e.key) {
        case KEY_ENTER:
          return onEnter(change);
        case KEY_SPACE:
          return checkPatterns(change);
      }
    }
  };
};

export default MarkdownPlugin;
