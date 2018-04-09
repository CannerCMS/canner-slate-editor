// @flow
import { Range } from "slate";
import type { Change, Node } from "slate";

export default (
  options: { [string]: any },
  currentTextNode: Node,
  matched: any,
  change: Change
) => {
  const matchedLength = matched[0].length;
  const count = (matched[0].match(/#/g) || []).length;
  let header;

  if (count === 1) header = options.HEADING_1;
  else if (count === 2) header = options.HEADING_2;
  else if (count === 3) header = options.HEADING_3;
  else if (count === 4) header = options.HEADING_4;
  else if (count === 5) header = options.HEADING_5;
  else if (count === 6) header = options.HEADING_6;
  else return;

  return change.setBlocks(header).deleteAtRange(
    Range.create({
      anchorKey: currentTextNode.key,
      focusKey: currentTextNode.key,
      anchorOffset: matched.index,
      focusOffset: matched.index + matchedLength
    })
  );
};
