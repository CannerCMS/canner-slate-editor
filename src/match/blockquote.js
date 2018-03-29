// @flow
import {Range} from 'slate';
import type {Change, Node} from 'slate';

export default function (currentTextNode: Node, matched: any, change: Change) {
  const matchedLength = matched[0].length;
  return change
    .setBlocks("blockquote")
    .deleteAtRange(Range.create({
      anchorKey: currentTextNode.key,
      focusKey: currentTextNode.key,
      anchorOffset: matched.index,
      focusOffset: matched.index + matchedLength
    }))
}