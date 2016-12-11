import React, {PropTypes} from 'react';

/* eslint-disable require-jsdoc */
export default function(Tag) {
  const NodeComponent = ({attributes, children, node}) => {
    const align = node.data.get('align');
    const indent = node.data.get('indent');
    return (
      <Tag
        {...attributes}
        style={{textAlign: align, paddingLeft: `${3 * indent}em`}}
      >{children}</Tag>
    );
  };

  NodeComponent.displayName = `${Tag}-node`;

  NodeComponent.propTypes = {
    attributes: PropTypes.object,
    children: PropTypes.any,
    node: PropTypes.any
  };

  return NodeComponent;
}
