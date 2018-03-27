// @flow
import {Range} from 'slate';
import type {Change, Node} from 'slate';
import PluginEditCode from 'slate-edit-code';

const codePlugin = PluginEditCode({
  onlyIn: node => node.type === 'code_block'
})

export default function (currentTextNode: Node, matched: any, change: Change) {
  const matchedLength = matched[0].length;
  return codePlugin.changes.wrapCodeBlock(
    change.deleteAtRange(Range.create({
      anchorKey: currentTextNode.key,
      focusKey: currentTextNode.key,
      anchorOffset: matched.index,
      focusOffset: matched.index + matchedLength
    }))
  ) 
}