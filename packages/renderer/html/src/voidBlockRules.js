// @flow
import React from "react";
import mapValues from "lodash.mapvalues";
import { nodeAttrs } from "@canner/slate-icon-shared";

export default function(Tag, blockType, stylesAttr = nodeAttrs) {
  return {
    deserialize(el) {
      if (blockType && el.tagName && el.tagName.toLowerCase() === Tag) {
        let data = {};

        if (el.style.textAlign) {
          data.align = el.style.textAlign;
        }

        if (el.style.lineHeight) {
          data.lineHeight = el.style.lineHeight;
        }

        if (el.style.paddingLeft) {
          data.indent = el.style.paddingLeft;
        }

        if (Object.keys(data).length > 0) {
          return {
            object: "block",
            type: blockType,
            data,
            isVoid: true
          };
        }

        return {
          object: "block",
          type: blockType,
          isVoid: true
        };
      }
    },
    serialize(obj) {
      if (obj.object == "block" && obj.type === blockType) {
        return <Tag style={mapValues(stylesAttr, val => val && val(obj))} />;
      }
    }
  };
}
