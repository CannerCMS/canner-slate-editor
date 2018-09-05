// @flow
import * as React from "react";
import type { nodeProps } from "./type";
import styled from "styled-components";

const CodeblockContainer = styled.div`
  position: relative;
`;

const CodeblockLang = styled.div`
  position: absolute;
  right: 2px;
  top: 2px;
  font-size: 14px;
  padding: 4px;
  background-color: #eee;
  color: #555;
  border-radius: 3px;
  text-transform: uppercase;
`;

export const codeBlockNode = options => {
  const CodeBlockComponent = ({ attributes, children, node }: nodeProps) => {
    const syntax = options.getSyntax(node);
    return (
      <CodeblockContainer>
        <CodeblockLang contentEditable={false}>{syntax || "TXT"}</CodeblockLang>
        <pre>
          <code {...attributes}>{children}</code>
        </pre>
      </CodeblockContainer>
    );
  };

  CodeBlockComponent.displayName = "codeblock-node";

  return CodeBlockComponent;
};

export const codeLineNode = () => {
  const CodeLineComponent = ({ attributes, children }: nodeProps) => {
    return <div {...attributes}>{children}</div>;
  };

  CodeLineComponent.displayName = "codeline-node";

  return CodeLineComponent;
};
