// @flow
import type { Change, Text } from "slate";

export default function trailingSpace(
  change: Change,
  currentTextNode: Text,
  offsetIndex: number
) {
  change.insertTextByKey(currentTextNode.key, offsetIndex, " ");
}
