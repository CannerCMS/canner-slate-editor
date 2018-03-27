// @flow
import type {Change, Node} from 'slate';

export default function (currentTextNode: Node, matched: any, change: Change) {
  return change
    .removeNodeByKey(currentTextNode.key)
    .insertBlock({
      type: "HR",
      isVoid: true
    })
    .collapseToStartOfNextBlock()
}