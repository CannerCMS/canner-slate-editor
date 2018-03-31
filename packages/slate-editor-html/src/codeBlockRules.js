// @flow
import React from 'react';
import PluginEditCode from 'slate-edit-code';
import {CODE, CODE_LINE} from '@canner/slate-constant/lib/blocks';

export default function({codeBlockType, codeLineType} = {}) {
  if (!codeBlockType)
    codeBlockType = CODE;
  if (!codeLineType)
    codeLineType = CODE_LINE;

  const codePlugin = PluginEditCode({
    onlyIn: node => node.type === codeBlockType
  });
  
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
      if (obj.object == 'block' && obj.type === codeLineType) {
        return (
          <React.Fragment>
            {children}
          </React.Fragment>
        );
      } else if (obj.object == 'block' && obj.type === codeBlockType) {
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
