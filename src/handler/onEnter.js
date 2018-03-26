// @flow
import type {Change} from 'slate';

export default function onEnter(change: Change, editor: any) {
  const {value} = change;
  const {blocks, texts, selection} = value;
  const getCurrentblock = blocks.get(0);
  const currentTextNode = texts.get(0);
  const currentLineText = currentTextNode.text;  

  if (
    getCurrentblock.type === 'code_line' ||
    getCurrentblock.type === 'code_block' ||
    currentLineText.length > selection.focusOffset
  ) return;

  return change.insertBlock('paragraph');
}