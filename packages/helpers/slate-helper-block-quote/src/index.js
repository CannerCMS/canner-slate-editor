/* eslint-disable new-cap */
import EditBlockquote from "slate-edit-blockquote";
import { BLOCKQUOTE, PARAGRAPH } from "@canner/slate-constant/lib/blocks";

export const DEFAULT = {
  type: BLOCKQUOTE,
  typeDefault: PARAGRAPH
};

export default (change, opt = DEFAULT) => {
  const options = Object.assign({}, DEFAULT, opt);
  let newChange;

  const utils = EditBlockquote(options).utils;
  const changes = EditBlockquote(options).changes;

  if (utils.isSelectionInBlockquote(change.value)) {
    newChange = changes.unwrapBlockquote(change);
  } else {
    newChange = changes.wrapInBlockquote(change);
  }

  return newChange;
};
