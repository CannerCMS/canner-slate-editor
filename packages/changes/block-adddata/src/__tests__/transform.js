import addDataToCurrent from "../";
import { Range } from "slate";

export default change => {
  const { value } = change;
  const { document } = value;
  const first = document.getFirstText();
  const range = Range.create({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 5
  });

  return change
    .select(range)
    .call(change => addDataToCurrent(change, { data: { foo: "bar" } }));
};
