import React, {PropTypes} from 'react';

/* eslint-disable require-jsdoc */
export default function() {
  const LinkNode = ({attributes, children, node}) => {
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

  LinkNode.propTypes = {
    attributes: PropTypes.object,
    children: PropTypes.any,
    node: PropTypes.any
  };

  return LinkNode;
}
