// @flow
import * as React from 'react';
import type {nodeProps} from './type';

export default function() {
  const LinkNode = ({attributes, children, node}: nodeProps) => {
    return (
      <a
        {...attributes}
        href={node.data.get('href')}
        data-slate-type="link">
        {children}
      </a>
    );
  };

  LinkNode.displayName = `link-node`;

  return LinkNode;
}
