// @flow
import React from "react";

const DEFAULT_OPT = {
  getSrc: node => node.data.get("src")
};

export default function(Tag, inlineType, options = DEFAULT_OPT) {
  return {
    deserialize(el) {
      if (inlineType && el.tagName && el.tagName.toLowerCase() === Tag) {
        let data = {};

        if (el.src) {
          data.src = el.src;
        }
        return {
          object: "inline",
          type: inlineType,
          data,
          isVoid: true
        };
      }
    },
    serialize(obj) {
      if (obj.object == "inline" && obj.type === inlineType) {
        const src = options.getSrc(obj);
        const props = {
          src
        };

        return <Tag {...props} />;
      }
    }
  };
}
