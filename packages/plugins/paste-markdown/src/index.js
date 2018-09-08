import { getEventTransfer } from "slate-react";
import { State } from "markup-it";
import markdown from "markup-it/lib/markdown";

const mdParser = State.create(markdown);

export default () => {
  return {
    /**
     * On paste, deserialize the HTML and then insert the fragment.
     *
     * @param {Event} event
     * @param {Change} change
     */

    onPaste: (event, change) => {
      const transfer = getEventTransfer(event);
      if (transfer.type != "html") return;
      const document = mdParser.deserializeToDocument(transfer.text);
      change.insertFragment(document);
      return true;
    }
  };
};
