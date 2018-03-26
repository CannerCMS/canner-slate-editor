// @flow
/**
 * Most of this was stolen from https://github.com/ianstormtaylor/slate/blob/460498b5ddfcecee7439eafe4f4d31cacde69f41/examples/markdown-preview/index.js
 */
import PluginEditCode from 'slate-edit-code';
import type {Change} from 'slate';
import {Mark, Range} from 'slate';
import renderMark from './renderMark';
import renderNode from './renderNode';
import type {Classnames} from './types';
import onEnter from './handler/onEnter';

type Options = {
  sizes?: Array<string>,
  classnames?: Classnames,
  strict?: boolean,
};

const KEY_ENTER = 'Enter';
const codePlugin = PluginEditCode({
  onlyIn: node => node.type === 'code_block'
})

const MarkdownPlugin = (options: Options = {}) => {

  return {
    renderMark: renderMark,
    renderNode: renderNode,
    onKeyDown: (e: any, change: Change, editor: any) => {
      switch (e.key) {
        case KEY_ENTER:
          return onEnter(change, editor);
      }
    },
    onKeyUp: (e, change: Change) => {
      const {value} = change;
      const {texts} = value;
      const currentTextNode = texts.get(0);
      const currentLineText = currentTextNode.text;
      let matched;
      
      // reference: https://github.com/PrismJS/prism/blob/gh-pages/components/prism-markdown.js
      if (matched = currentLineText.match(/^>(?:[\t ])/m)) {
        // [blockquote] punctuation, blockquote
        const matchedLength = matched[0].length;
        return change
          .setBlocks("BLOCKQUOTE")
          .deleteAtRange(Range.create({
            anchorKey: currentTextNode.key,
            focusKey: currentTextNode.key,
            anchorOffset: matched.index,
            focusOffset: matched.index + matchedLength
          }))
      } else if (matched = currentLineText.match(/^(?: {4}|\t)/m)) {
        // [Code Block] Prefixed by 4 spaces or 1 tab
        const matchedLength = matched[0].length;
        return codePlugin.changes.wrapCodeBlock(
          change.deleteAtRange(Range.create({
            anchorKey: currentTextNode.key,
            focusKey: currentTextNode.key,
            anchorOffset: matched.index,
            focusOffset: matched.index + matchedLength
          }))
        ) 
      } else if (matched = currentLineText.match(/``.+?``|`[^`\n]+`/)) {
        // [Code] `code`
        const matchedLength = matched[0].length;
        return change
                .deleteAtRange(Range.create({
                  anchorKey: currentTextNode.key,
                  focusKey: currentTextNode.key,
                  anchorOffset: matched.index,
                  focusOffset: matched.index + matchedLength
                }))
                .insertTextByKey(currentTextNode.key, matched.index, matched[0].replace(/`/g, ""), [Mark.create({type: 'CODE'})])
      } else if (matched = currentLineText.match(/(^\s*)#{1,6}(?:[\t ])/m)) {
        // [Header] h1 ~ h6
        const matchedLength = matched[0].length;
        const count = (matched[0].match(/#/g) || []).length;
        let header;

        if (count === 1)
          header = "header_one";
        else if (count === 2)
          header = "header_two";
        else if (count === 3)
          header = "header_three"
        else if (count === 4)
          header = "header_four"
        else if (count === 5)
          header = "header_five"
        else if (count === 6)
          header = "header_six"
        else
          return 

        return change
          .setBlocks(header)
          .deleteAtRange(Range.create({
            anchorKey: currentTextNode.key,
            focusKey: currentTextNode.key,
            anchorOffset: matched.index,
            focusOffset: matched.index + matchedLength
          }))
      }
    }
  };
};

export default MarkdownPlugin;
