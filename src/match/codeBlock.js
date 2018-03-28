// @flow
import {Range, Data} from 'slate';
import type {Change, Node} from 'slate';
import PluginEditCode from 'slate-edit-code';

const codePlugin = PluginEditCode({
  onlyIn: node => node.type === 'code_block'
})

export default function (currentTextNode: Node, matched: any, change: Change, lang: ?string) {
  const matchedLength = matched[0].length;
  let newChange = change;

  if (lang) {
    newChange = change
      .setBlocks({data: Data.create({syntax: lang})});
  }

  return codePlugin.changes.wrapCodeBlock(
    newChange
    .deleteAtRange(Range.create({
      anchorKey: currentTextNode.key,
      focusKey: currentTextNode.key,
      anchorOffset: matched.index,
      focusOffset: matched.index + matchedLength
    }))
  )
}