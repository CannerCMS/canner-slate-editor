// @flow
import type {Change} from 'slate';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';
import DEFAULT_LIST from '../constant/list';
const {isSelectionInList} = EditList(DEFAULT_LIST).utils;
const {isSelectionInBlockquote} = EditBlockquote().utils;

export default function onEnter(change: Change) {
  const {value} = change;
  const {blocks, texts, selection} = value;
  const getCurrentblock = blocks.get(0);
  const currentTextNode = texts.get(0);
  const currentLineText = currentTextNode.text;

  if (
    getCurrentblock.type === 'code_line' ||
    getCurrentblock.type === 'code_block' ||
    getCurrentblock.type === 'code_block' ||
    isSelectionInList(value) ||
    isSelectionInBlockquote(value) ||
    currentLineText.length > selection.focusOffset
  ) return;

  return change.insertBlock('paragraph');
}