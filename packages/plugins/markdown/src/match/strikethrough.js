// @flow
import { Mark, Range } from "slate";
import type { Change, Text } from "slate";
import trailingSpace from "../utils/trailingSpace";
import removeAllMark from "@canner/slate-helper-mark-removeall";

export default function(
  type: string,
  currentTextNode: Text,
  matched: any,
  change: Change
) {
  const matchedLength = matched[0].length;
  const addText = matched[0].trim().replace(new RegExp(/~/, "g"), "");

  return change
    .deleteAtRange(
      Range.create({
        anchorKey: currentTextNode.key,
        focusKey: currentTextNode.key,
        anchorOffset: matched.index,
        focusOffset: matched.index + matchedLength
      })
    )
    .insertTextByKey(currentTextNode.key, matched.index, addText, [
      Mark.create({ type })
    ])
    .call(trailingSpace, currentTextNode, matched.index)
    .call(removeAllMark);
}
