import { haveInlines } from "@canner/slate-util-have";

export const DEFAULT = {
  href: "http://example.com/"
};

export default (change, type, opt = DEFAULT) => {
  let { text, href } = Object.assign({}, DEFAULT, opt);
  let haveLinks = haveInlines(change, type);

  if (!text) text = href;

  if (haveLinks) {
    change.unwrapInline(type);
  } else if (change.value.isExpanded) {
    change
      .wrapInline({
        type,
        data: { href }
      })
      .collapseToEnd();
  } else {
    change
      .insertText(text)
      .extend(0 - text.length)
      .wrapInline({
        type: type,
        data: { href: href }
      })
      .collapseToEnd();
  }

  return change;
};
