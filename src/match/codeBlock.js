// @flow
import {Range, Data} from 'slate';
import type {Change, Node} from 'slate';
import PluginEditCode from 'slate-edit-code';

const codePlugin = PluginEditCode({
  onlyIn: node => node.type === 'code_block'
})

export default function (currentTextNode: Node, matched: any, change: Change, lang: ?string) {
  const matchedLength = matched[0].length;

  const newChange = codePlugin.changes.wrapCodeBlock(
    change.deleteAtRange(Range.create({
      anchorKey: currentTextNode.key,
      focusKey: currentTextNode.key,
      anchorOffset: matched.index,
      focusOffset: matched.index + matchedLength
    })))

  if (lang) {
    return newChange.setBlocks({data: Data.create({syntax: lang})})
  }
  return newChange;
}