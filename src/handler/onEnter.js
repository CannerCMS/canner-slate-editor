// @flow
import type { Change } from "slate";
import EditList from "slate-edit-list";
import EditBlockquote from "slate-edit-blockquote";

export default function onEnter(options: any, change: Change) {
  const { value } = change;
  const { blocks, texts, selection } = value;
  const getCurrentblock = blocks.get(0);
  const currentTextNode = texts.get(0);
  const currentLineText = currentTextNode.text;
  const { isSelectionInList } = EditList(options.listOption).utils;
  const { isSelectionInBlockquote } = EditBlockquote(
    options.blockquoteOption
  ).utils;

  if (
    getCurrentblock.type === options.blocks.CODE_LINE ||
    getCurrentblock.type === options.blocks.CODE ||
    getCurrentblock.type === options.blocks.CODE ||
    isSelectionInList(value) ||
    isSelectionInBlockquote(value) ||
    currentLineText.length > selection.focusOffset
  )
    return;

  return change.insertBlock(options.blocks.PARAGRAPH);
}
