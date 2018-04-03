// @flow
import * as React from 'react';
import {Tooltip} from 'antd';
import type {nodeProps} from './type';

export default function(options) {
  const LinkNode = ({attributes, children, node}: nodeProps) => {
    return (
      <Tooltip title={options.getHref(node)}>
        <a
          {...attributes}
          href={options.getHref(node)}
          data-slate-type="link">
          {children}
        </a>
      </Tooltip>
    );
  };

  LinkNode.displayName = `link-node`;

  return LinkNode;
}
