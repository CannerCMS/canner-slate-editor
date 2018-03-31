// @flow
import React from 'react';
import PluginEditCode from 'slate-edit-code';

const codePlugin = PluginEditCode({
  onlyIn: node => node.type === 'code_block'
});

export default function() {
  return {
    deserialize(el) {
      if (el.tagName.toLowerCase() === 'pre') {
        const cls = el.childNodes[0].className;
        const matched = cls && cls.match(/(?:lang|language)-(\w+)/)
        const codeBlockNode = codePlugin.utils.deserializeCode(el.textContent);
        if (matched) {
          const codeBlock =  codeBlockNode.toJSON();
          codeBlock.data = {syntax: matched[1]};
          return codeBlock
        }

        return codeBlockNode
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
