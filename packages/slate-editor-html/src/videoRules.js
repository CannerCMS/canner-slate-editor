// @flow
import React from 'react';
import styled from "styled-components";
import {nodeAttrs} from '@canner/slate-icon-shared';

export const ImageContiner = styled.span`
  display: flex;
  justify-content: ${props => {
    if (props.align === "center") return "center";
    else if (props.align === "right") return "flex-end";
    return "flex-start";
  }};
`;

const defaultAttrs = {
  id: (node) => node.data.get('id'),
  ...nodeAttrs
}

export default function(blockType = 'video', stylesAttr = defaultAttrs) {
  return {
    deserialize(el) {
      if (blockType && el.tagName && el.tagName.toLowerCase() === 'iframe') {
        return {
          object: 'block',
          type: blockType,
          isVoid: true
        }
      }
    },
    serialize(obj) {
      if (obj.object == 'block' && obj.type === blockType) {
        const align = stylesAttr.textAlign(obj);
        const indent = stylesAttr.paddingLeft(obj);
        const width = stylesAttr.width(obj) || 560;
        const height = stylesAttr.height(obj) || 315;
        const id = stylesAttr.id(obj);
        let link;

        if (blockType === 'youtube') {
          link = `https://www.youtube.com/embed/${id}`;
        } else if (blockType === 'dailymotion') {
          link = `https://www.dailymotion.com/embed/video/${id}`;
        } else if (blockType === 'vimeo') {
          link = `https://player.vimeo.com/video/${id}`;
        } else if (blockType === 'youku') {
          link = `https://player.youku.com/embed/${id}`;
        }

        return (
          <ImageContiner align={align}>
            <iframe
              src={link}
              style={{
                width,
                height,
                marginLeft: indent
              }}/>
          </ImageContiner>
        );
      }
    }
  }
}
