// @flow
import React from "react";
import styled from "styled-components";
import { IMAGE } from "@canner/slate-constant/lib/inlines";
import { nodeAttrs } from "@canner/slate-icon-shared";

export const ImageContiner = styled.img`
  src: ${props => props.src};
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left: ${props => props.indent};
  display: flex;
  justify-content: ${props => {
    if (props.align === "center") return "center";
    else if (props.align === "right") return "flex-end";
    return "flex-start";
  }};
`;

const defaultAttrs = {
  src: node => node.data.get("src"),
  ...nodeAttrs
};

export default function(inlineType = IMAGE, stylesAttr = defaultAttrs) {
  return {
    deserialize(el) {
      if (inlineType && el.tagName && el.tagName.toLowerCase() === "img") {
        let data = {};

        if (el.src) {
          data.src = el.src;
        }

        if (el.style.marginLeft) {
          data.indent = el.style.marginLeft;
        }

        if (
          el.style.width &&
          typeof el.style.width === "number" &&
          el.style.width > 0
        ) {
          data.width = el.style.width;
        }

        if (
          el.style.height &&
          typeof el.style.height === "number" &&
          el.style.height > 0
        ) {
          data.height = el.style.height;
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
        const align = stylesAttr.textAlign(obj);
        const indent = stylesAttr.paddingLeft(obj);
        const src = stylesAttr.src(obj);
        const width = stylesAttr.width(obj);
        const height = stylesAttr.height(obj);

        return (
          <ImageContiner
            align={align}
            width={width}
            height={height}
            indent={indent}
            src={src}
          />
        );
      }
    }
  };
}
