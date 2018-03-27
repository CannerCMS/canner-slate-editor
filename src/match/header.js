// @flow
import {Range} from 'slate';
import type {Change, Node} from 'slate';

export default function (currentTextNode: Node, matched: any, change: Change) {
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