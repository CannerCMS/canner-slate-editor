// @flow
import { Range, Data } from "slate";
import type { Change, Node } from "slate";
import PluginEditCode from "slate-edit-code";

export default function(
  codeOption: { [string]: any },
  currentTextNode: Node,
  matched: any,
  change: Change,
  lang: ?string
) {
  const matchedLength = matched[0].length;
  const codePlugin = PluginEditCode(codeOption);
  let newChange = change;

  if (lang) {
    newChange = change.setBlocks({ data: Data.create({ syntax: lang }) });
  }

  return codePlugin.changes.wrapCodeBlock(
    newChange.deleteAtRange(
      Range.create({
        anchorKey: currentTextNode.key,
        focusKey: currentTextNode.key,
        anchorOffset: matched.index,
        focusOffset: matched.index + matchedLength
      })
    )
  );
}
