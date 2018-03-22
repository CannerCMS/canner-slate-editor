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

export default function(blockType = 'image') {
  return {
    deserialize() {
      if (blockType) {
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
        const src = obj.data.get('src');
        const width = obj.data.get('width');
        const height = obj.data.get('height');

        return (
          <ImageContiner align={align}>
            <img
              src={src}
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
