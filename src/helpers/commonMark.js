import React, {PropTypes} from 'react';

/* eslint-disable require-jsdoc */
export default function(Tag, type) {
  const MarkComponent = ({attributes, children, mark}) => {
    const color = mark.get('data').get('rgba');
    return (
      <Tag
        {...attributes}
        style={{color}}
        data-slate-type={type || Tag}>
        {children}
      </Tag>
    );
  };

  MarkComponent.displayName = `${Tag}-mark`;

  MarkComponent.propTypes = {
    attributes: PropTypes.object,
    children: PropTypes.any,
    mark: PropTypes.any
  };

  return MarkComponent;
}
