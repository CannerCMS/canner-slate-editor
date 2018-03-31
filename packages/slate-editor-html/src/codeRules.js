// @flow
import React from 'react';

export default function() {
  return {
    deserialize(el, next, blockType) {
      if (blockType) {
        let data = {}

        if (el.href) {
          data.href = el.href;
        }
        return {
          object: 'block',
          type: blockType,
          data,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block' && obj.type === 'code_line') {
        return (
          <React.Fragment>
            {children}
          </React.Fragment>
        );
      } else if (obj.object == 'block' && obj.type === 'code_block') {
        const syntax = obj.data.get('syntax');
        const props = {
          className: syntax && `lang-${syntax}`
        };
        return (
          <pre>
            <code {...props}>
              {children}
            </code>
          </pre>
        )
      }
    }
  }
}
