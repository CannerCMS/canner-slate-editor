/* eslint-disable new-cap */
import EditList from "slate-edit-list";
import {
  OL_LIST,
  UL_LIST,
  LIST_ITEM,
  PARAGRAPH
} from "@canner/slate-constant/lib/blocks";

export const DEFAULT = {
  types: [OL_LIST, UL_LIST],
  typeItem: LIST_ITEM,
  typeDefault: PARAGRAPH,
  ordered: true
};

export default (change, opt = DEFAULT) => {
  const options = Object.assign({}, DEFAULT, opt);
  const { types, ordered } = options;
  const { utils, changes } = EditList(options);
  const currentType = ordered ? types[0] : types[1];
  let newChange;

  if (utils.isSelectionInList(change.value)) {
    if (utils.getCurrentList(change.value).type !== currentType) {
      newChange = changes.wrapInList(change, currentType);
    } else {
      newChange = changes.unwrapList(change);
    }
  } else {
    newChange = changes.wrapInList(change, currentType);
  }

  return newChange;
};
