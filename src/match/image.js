// @flow
import type {Change, Node} from 'slate';

export default function (currentTextNode: Node, matched: any, change: Change) {
  return change
    .removeNodeByKey(currentTextNode.key)
    .insertInline({
      type: 'IMAGE',
      isVoid: true,
      data: {
        src: matched[2]
      }
    })
    .collapseToStartOfNextBlock()
}