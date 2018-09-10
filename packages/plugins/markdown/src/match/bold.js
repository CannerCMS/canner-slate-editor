// @flow
import { Mark, Range } from "slate";
import type { Change, Text } from "slate";
import removeAllMark from "@canner/slate-helper-mark-removeall";

export default function(
  type: string,
  currentTextNode: Text,
  matched: any,
  change: Change
) {
  const matchedLength = matched[0].length;
  const reg = matched[1] === "**" ? /\*\*/ : matched[1];
  const addText = matched[0].replace(new RegExp(reg, "g"), "");
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
    .call(removeAllMark);
}
