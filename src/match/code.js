// @flow
import {Mark, Range} from 'slate';
import type {Change, Node} from 'slate';

export default function (currentTextNode: Node, matched: any, change: Change) {
  const matchedLength = matched[0].length;
  return change
    .deleteAtRange(Range.create({
      anchorKey: currentTextNode.key,
      focusKey: currentTextNode.key,
      anchorOffset: matched.index,
      focusOffset: matched.index + matchedLength
    }))
    .insertTextByKey(currentTextNode.key, matched.index, matched[0].replace(/`/g, ""), [Mark.create({type: 'CODE'})])
}