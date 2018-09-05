import marks from "../";
import { Range } from "slate";

export default change => {
  const { document } = change.value;
  const first = document.getFirstText();
  const range = Range.create({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 5
  });

  const nextChange = change.select(range);

  return marks(nextChange, { type: "test", data: { foo2: "bar2" } });
};
