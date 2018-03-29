// @flow
import * as React from 'react';
import type {nodeProps} from './type';

export default function(Tag) {
  const NodeComponent = ({attributes, children, node}: nodeProps) => {
    const align = node.data.get('align');
    const indent = node.data.get('indent');
    const lineHeight = node.data.get('lineHeight');
    let style;

    if (Tag === 'ul' || Tag === 'ol' || !indent) {
      style = {textAlign: align, lineHeight};
    } else {
      style = {textAlign: align, lineHeight, paddingLeft: `${3 * indent}em`};
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
