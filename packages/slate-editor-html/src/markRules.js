// @flow
import React from 'react';

export default function(Tag, markType, styleData) {
  return {
    deserialize(el, next) {
      if (markType && el.tagName.toLowerCase() === markType) {
        return {
          object: 'mark',
          type: markType,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'mark' && obj.type === markType) {
        let style;

        if (styleData) {
          style = {
            [styleData.key]: obj.data.get(styleData.value)
          }
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
