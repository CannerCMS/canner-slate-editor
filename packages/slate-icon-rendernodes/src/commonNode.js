// @flow
import * as React from 'react';
import type {nodeProps} from './type';

export default function(Tag) {
  const NodeComponent = ({attributes, children, node}: nodeProps) => {
    const align = node.data.get('align');
    const indent = node.data.get('indent') || 0;
    let style;

    if (Tag === 'ul' || Tag === 'ol') {
      style = {textAlign: align};
    } else {
      style = {textAlign: align, paddingLeft: `${3 * indent}em`};
    }

    return (
      <Tag
        {...attributes}
        data-slate-type={Tag}
        style={style}
      >{children}</Tag>
    );
  };

  NodeComponent.displayName = `${Tag}-node`;

  return NodeComponent;
}
