// @flow
import React from 'react';
import styled from "styled-components";

export const ImageContiner = styled.div`
  display: flex;
  justify-content: ${props => {
    if (props.align === "center") return "center";
    else if (props.align === "right") return "flex-end";
    return "flex-start";
  }};
`;

export default function(blockType = 'video') {
  return {
    deserialize(el) {
      if (blockType && el.tagName.toLowerCase() === 'iframe') {
        return {
          object: 'block',
          type: blockType,
          isVoid: true
        }
      }
    },
    serialize(obj) {
      if (obj.object == 'block' && obj.type === blockType) {
        const align = obj.data.get('align');
        const indent = obj.data.get('indent') || 0;
        
        const width = obj.data.get('width') || 560;
        const height = obj.data.get('height') || 315;
        const id = obj.data.get('id');
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
                marginLeft: `${3 * (indent || 0)}em`
              }}/>
          </ImageContiner>
        );
      }
    }
  }
}
