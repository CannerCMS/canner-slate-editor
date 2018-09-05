import clearDataByKeyToCurrent from "../";
import { Point, Range } from "slate";

export default change => {
  const { document } = change.value;
  const first = document.getFirstText();
  const range = Range.create({
    anchor: Point.create({
      key: first.key,
      offset: 0
    }),
    focus: Point.create({
      key: first.key,
      offset: 5
    })
  });

  return change
    .select(range)
    .call(change => clearDataByKeyToCurrent(change, "foo"));
};
