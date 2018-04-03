// @flow
import React from 'react';
import styled from "styled-components";
import {IMAGE} from '@canner/slate-constant/lib/blocks';
import {nodeAttrs} from '@canner/slate-icon-shared';

export const ImageContiner = styled.div`
  display: flex;
  justify-content: ${props => {
    if (props.align === "center") return "center";
    else if (props.align === "right") return "flex-end";
    return "flex-start";
  }};
`;

const defaultAttrs = {
  src: (node) => node.data.get('src'),
  ...nodeAttrs
}

export default function(blockType = IMAGE, stylesAttr = defaultAttrs) {
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
        const align = stylesAttr.textAlign(obj);
        const indent = stylesAttr.paddingLeft(obj);
        const src = stylesAttr.src(obj);
        const width = stylesAttr.width(obj);
        const height = stylesAttr.height(obj);

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
