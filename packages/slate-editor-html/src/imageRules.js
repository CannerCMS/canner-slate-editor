// @flow
import React from 'react';
import styled from "styled-components";
import {IMAGE} from '@canner/slate-constant/lib/blocks';

export const ImageContiner = styled.div`
  display: flex;
  justify-content: ${props => {
    if (props.align === "center") return "center";
    else if (props.align === "right") return "flex-end";
    return "flex-start";
  }};
`;

export default function(blockType = IMAGE) {
  return {
    deserialize(el) {
      if (blockType && el.tagName && el.tagName.toLowerCase() === 'img') {
        let data = {}

        if (el.src) {
          data.src = el.src;
        }

        if (el.style.marginLeft) {
          data.indent = el.style.marginLeft;
        }

        if (el.style.width) {
          data.width = el.style.width;
        }

        if (el.style.height) {
          data.height = el.style.height;
        }

        return {
          object: 'block',
          type: blockType,
          data,
          isVoid: true
        }
      }
    },
    serialize(obj) {
      if (obj.object == 'block' && obj.type === blockType) {
        const align = obj.data.get('align');
        const indent = obj.data.get('indent');
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
                marginLeft: indent
              }}/>
          </ImageContiner>
        );
      }
    }
  }
}
