// @flow
import blocklist from '@canner/slate-helper-block-list';
import {Range} from 'slate';
import type {Change, Node} from 'slate';

export default function (currentTextNode: Node, matched: any, change: Change, ordered: boolean) {
  const matchedLength = matched[0].length;
  const newChange = change.deleteAtRange(Range.create({
    anchorKey: currentTextNode.key,
    focusKey: currentTextNode.key,
    anchorOffset: matched.index,
    focusOffset: matched.index + matchedLength - 1
  }))

  return blocklist(newChange, {
    typeUL: 'list-ul',
    typeOL: 'list-ol',
    typeItem: 'list-item',
    ordered: ordered
  })
}