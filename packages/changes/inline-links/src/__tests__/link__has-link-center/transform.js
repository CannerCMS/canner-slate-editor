import links from "../../";
import { Range } from "slate";

export default change => {
  const { document } = change.value;
  const first = document.getFirstText();
  const second = document.getNextText(first.key);
  const range = Range.create({
    anchorKey: second.key,
    anchorOffset: 4,
    focusKey: second.key,
    focusOffset: 8
  });

  const nextChange = change.select(range);

  return links(nextChange, "link", { href: "http://test.com/" });
};
