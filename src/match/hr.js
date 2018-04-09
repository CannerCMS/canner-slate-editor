// @flow
import type { Change, Node } from "slate";

export default function(
  type: string,
  currentTextNode: Node,
  matched: any,
  change: Change
) {
  return change
    .removeNodeByKey(currentTextNode.key)
    .insertBlock({
      type,
      isVoid: true
    })
    .collapseToStartOfNextBlock();
}
