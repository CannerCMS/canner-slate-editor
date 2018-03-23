// @flow
import React from 'react';

export default function(Tag, inlineType) {
  return {
    deserialize(el, next) {
      if (inlineType && el.tagName.toLowerCase() === Tag) {
        let data = {}

        if (el.href) {
          data.href = el.href;
        }
        return {
          object: 'inline',
          type: inlineType,
          data,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'inline' && obj.type === inlineType) {
        const href = obj.data.get('href');
        const props = {
          href
        };

        return (
          <Tag {...props}>
            {children}
          </Tag>
        );
      }
    }
  }
}
