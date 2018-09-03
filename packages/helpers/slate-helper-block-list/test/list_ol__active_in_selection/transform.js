import list from "../../src";
import { Range } from "slate";

export default change => {
  const { document } = change.value;
  const first = document.getFirstText();
  const range = Range.create({
    anchorKey: first.key,
    anchorOffset: 4,
    focusKey: first.key,
    focusOffset: 7
  });

  const nextChange = change.select(range);

  return list(nextChange);
};
