// @flow
import * as React from 'react';
import type {nodeProps} from './type';
import styled from 'styled-components';

const CodeblockContainer = styled.div`
  position: relative;
`

const CodeblockLang = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 10px;
  padding: 4px;
  background-color: #f5f2f0;
  border: 1px solid #CCC;
  color: #555;
  border-radius: 3px;
  text-transform: uppercase;
`

export const codeBlockNode = (options) => {
  const CodeBlockComponent = ({attributes, children, node}: nodeProps) => {
    const syntax = options.getSyntax(node);
    return (
      <CodeblockContainer>
        {syntax &&
          <CodeblockLang contentEditable={false}>{syntax}</CodeblockLang>
        }
        <pre>
          <code {...attributes}>
            {children}
          </code>
        </pre>
      </CodeblockContainer>
    );
  };

  CodeBlockComponent.displayName = 'codeblock-node';

  return CodeBlockComponent;
}

export const codeLineNode = () => {
  const CodeLineComponent = ({attributes, children}: nodeProps) => {
    return (
      <div {...attributes}>{children}</div>
    );
  };

  CodeLineComponent.displayName = 'codeline-node';

  return CodeLineComponent;
}
