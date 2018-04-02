// @flow
import React from 'react';
export default function(Tag, blockType) {
  return {
    deserialize(el, next) {
      if (blockType && el.tagName && el.tagName.toLowerCase() === Tag) {
        let data = {}

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
            object: 'block',
            type: blockType,
            data,
            nodes: next(el.childNodes),
          }
        }

        return {
          object: 'block',
          type: blockType,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block' && obj.type === blockType) {
        const align = obj.data.get('align');
        const indent = obj.data.get('indent');
        const lineHeight = obj.data.get('lineHeight');
        let style;

        if (Tag === 'ul' || Tag === 'ol') {
          style = {textAlign: align, lineHeight};
        } else {
          style = {textAlign: align, lineHeight, paddingLeft: indent};
        }

        return (
          <Tag style={style}>
            {children}
          </Tag>
        );
      }
    }
  }
}
