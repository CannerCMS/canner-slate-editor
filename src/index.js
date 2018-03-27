// @flow
/**
 * Most of this was stolen from https://github.com/ianstormtaylor/slate/blob/460498b5ddfcecee7439eafe4f4d31cacde69f41/examples/markdown-preview/index.js
 */
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

const KEY_ENTER = 'Enter';

const MarkdownPlugin = () => {

  return {
    renderMark: renderMark,
    renderNode: renderNode,
    onKeyDown: (e: any, change: Change, editor: any) => {
      switch (e.key) {
        case KEY_ENTER:
          return onEnter(change, editor);
      }
    },
    onKeyUp: (e: any, change: Change) => {
      const {value} = change;
      const {texts} = value;
      const currentTextNode = texts.get(0);
      const currentLineText = currentTextNode.text;
      let matched;

      // reference: https://github.com/PrismJS/prism/blob/gh-pages/components/prism-markdown.js
      if (matched = currentLineText.match(/^>(?:[\t ])/m)) {
        // [blockquote] punctuation, blockquote
        return matchBlockquote(currentTextNode, matched, change);
      } else if (matched = currentLineText.match(/^(?: {4}|\t)/m)) {
        // [Code Block] Prefixed by 4 spaces or 1 tab
        return matchCodeBlock(currentTextNode, matched, change);
      } else if (matched = currentLineText.match(/``.+?``|`[^`\n]+`/)) {
        // [Code] `code`
        return matchCode(currentTextNode, matched, change);
      } else if (matched = currentLineText.match(/(^\s*)#{1,6}(?:[\t ])/m)) {
        // [Header] h1 ~ h6
        // # h1
        // ## h2
        // ###### h6
        return matchHeader(currentTextNode, matched, change);
      } else if (matched = currentLineText.match(/(\*\*)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\1/)) {
        // [Bold] **strong**
        return matchBold(currentTextNode, matched, change);
      } else if (matched = currentLineText.match(/([_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\1/)) {
        // [Italic] _em_
        return matchItalic(currentTextNode, matched, change);
      } else if (matched = currentLineText.match(/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m)) {
        // [HR]
        // ***
        // ---
        // * * *
        // -----------
        return matchHr(currentTextNode, matched, change);
      } else if (matched = currentLineText.match(/!\[([^\]]+)\]\(([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?)\)/)) {
        // ![example](http://example.com "Optional title")
        // ![example] [id]
        return matchImage(currentTextNode, matched, change);
      } else if (matched = currentLineText.match(/\[([^\]]+)\]\(([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?)\)/)) {
        // [example](http://example.com "Optional title")
        // [example] [id]
        return matchLink(currentTextNode, matched, change);
      }
    }
  };
};

export default MarkdownPlugin;
