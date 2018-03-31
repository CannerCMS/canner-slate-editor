// @flow
import * as React from 'react';
import type {nodeProps} from './type';

export default function() {
  const CodeBlockComponent = ({attributes, children}: nodeProps) => {
    return (
      <pre>
        <code {...attributes}>
          {children}
        </code>
      </pre>
    );
  };

  CodeBlockComponent.displayName = 'codeblock-node';

  return CodeBlockComponent;
}
