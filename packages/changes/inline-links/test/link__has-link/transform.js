import links from "../../src";
import { Range } from "slate";

export default change => {
  const { document } = change.value;
  const first = document.getFirstText();
  const range = Range.create({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 12
  });

  const nextChange = change.select(range);

  return links(nextChange, "link");
};
