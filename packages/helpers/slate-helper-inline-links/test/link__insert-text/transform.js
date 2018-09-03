import links from "../../src";

export default change => {
  const nextChange = change.move(2).focus();

  return links(nextChange, "link");
};
