import Html from "slate-html-serializer";
import { DEFAULT_RULES } from "@canner/slate-editor-html";
import { getEventTransfer } from "slate-react";

const serializer = new Html({ rules: DEFAULT_RULES });

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
      const { document } = serializer.deserialize(transfer.html);
      change.insertFragment(document);
      return true;
    }
  };
};
