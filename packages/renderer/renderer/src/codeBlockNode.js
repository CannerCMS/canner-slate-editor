// @flow
import * as React from "react";
import type { nodeProps } from "./type";
import { Select } from "antd";
import styled from "styled-components";
import { languages } from "prismjs/components.json";
const { Option } = Select;

const CodeblockContainer = styled.div`
  position: relative;
`;

const CodeblockLang = styled.div`
  position: absolute;
  right: 2px;
  top: 2px;
  font-size: 14px;
  padding: 4px;
  color: #555;
  border-radius: 3px;
  text-transform: uppercase;
`;

export const codeBlockNode = options => {
  const CodeBlockComponent = ({
    attributes,
    children,
    node,
    editor
  }: nodeProps) => {
    const syntax = options.getSyntax(node);
    const selectLang = value => {
      editor.change(change =>
        change.setNodeByKey(node.key, { data: { syntax: value } })
      );
    };

    return (
      <CodeblockContainer>
        <CodeblockLang contentEditable={false}>
          <Select
            showSearch
            placeholder="Language"
            onSelect={selectLang}
            style={{ minWidth: "80px" }}
            defaultValue={syntax || "TXT"}
            size="small"
          >
            {Object.keys(languages)
              .filter(lang => {
                return languages[lang].title;
              })
              .map(lang => {
                return (
                  <Option value={lang} key={lang}>
                    {languages[lang].title}
                  </Option>
                );
              })}
          </Select>
        </CodeblockLang>
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
