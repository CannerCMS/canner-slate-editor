// @flow
import React from 'react';
import PluginEditCode from 'slate-edit-code';
import {CODE, CODE_LINE} from '@canner/slate-constant/lib/blocks';

export default function(opt) {
  const options = Object.assign({
    codeBlockType: CODE,
    codeLineType: CODE_LINE,
    getSyntax: (node) => node.data.get('syntax')
  }, opt)

  const codePlugin = PluginEditCode({
    onlyIn: node => node.type === options.codeBlockType
  });
  
  return {
    deserialize(el) {
      if (el.tagName && el.tagName.toLowerCase() === 'pre') {
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
      if (obj.object == 'block' && obj.type === options.codeLineType) {
        return (
          <React.Fragment>
            {children}
          </React.Fragment>
        );
      } else if (obj.object == 'block' && obj.type === options.codeBlockType) {
        const syntax = options.getSyntax(obj);
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
