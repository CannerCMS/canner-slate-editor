// @flow
import React from "react";
import { EMOJI } from "@canner/slate-constant/lib/inlines";

export default function(opt) {
  const options = Object.assign(
    {
      type: EMOJI,
      getEmoji: node => node.data.getIn(["emoji", "native"])
    },
    opt
  );

  return {
    // deserialize(el) {
    // TODO deserialize emoji
    // },
    serialize(obj) {
      if (obj.object == "inline" && obj.type === options.type) {
        return <span>{options.getEmoji(obj).trim()}</span>;
      }
    }
  };
}
