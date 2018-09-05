import links from "../../";
import { Range } from "slate";

export default change => {
  const { document } = change.value;
  const first = document.getFirstText();
  const second = document.getNextText(first.key);

  const range = Range.create({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: second.key,
    focusOffset: 8
  });

  const nextState = change.select(range);

  return links(nextState, "link", { href: "http://test.com/" });
};
