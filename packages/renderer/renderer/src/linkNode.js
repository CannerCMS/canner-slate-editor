// @flow
import * as React from "react";
import { Tooltip, Icon } from "antd";
import links from "@canner/slate-helper-inline-links";
import type { nodeProps } from "./type";

export default function(options) {
  const LinkNode = ({ attributes, children, node, editor }: nodeProps) => {
    const removeLink = () => {
      editor.change(change => links(change.moveToRangeOf(node), node.type));
    };

    return (
      <Tooltip
        title={
          <span>
            {options.getHref(node)}
            <Icon
              type="close-circle"
              theme="outlined"
              style={{ marginLeft: "5px" }}
              onClick={removeLink}
            />
          </span>
        }
      >
        <a {...attributes} href={options.getHref(node)} data-slate-type="link">
          {children}
        </a>
      </Tooltip>
    );
  };

  LinkNode.displayName = `link-node`;

  return LinkNode;
}
