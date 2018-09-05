// @flow
import React from "react";
import styled from "styled-components";
import { nodeAttrs } from "@canner/slate-icon-shared";

export const VideoContiner = styled.iframe`
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
  id: node => node.data.get("id"),
  ...nodeAttrs
};

export default function(inlineType = "video", stylesAttr = defaultAttrs) {
  return {
    deserialize(el) {
      if (inlineType && el.tagName && el.tagName.toLowerCase() === "iframe") {
        return {
          object: "inline",
          type: inlineType,
          isVoid: true
        };
      }
    },
    serialize(obj) {
      if (obj.object == "inline" && obj.type === inlineType) {
        const align = stylesAttr.textAlign(obj);
        const indent = stylesAttr.paddingLeft(obj);
        const width = stylesAttr.width(obj) || 560;
        const height = stylesAttr.height(obj) || 315;
        const id = stylesAttr.id(obj);
        let link;

        if (inlineType === "youtube") {
          link = `https://www.youtube.com/embed/${id}`;
        } else if (inlineType === "dailymotion") {
          link = `https://www.dailymotion.com/embed/video/${id}`;
        } else if (inlineType === "vimeo") {
          link = `https://player.vimeo.com/video/${id}`;
        } else if (inlineType === "youku") {
          link = `https://player.youku.com/embed/${id}`;
        }

        return (
          <VideoContiner
            align={align}
            width={width}
            height={height}
            indent={indent}
            src={link}
          />
        );
      }
    }
  };
}
