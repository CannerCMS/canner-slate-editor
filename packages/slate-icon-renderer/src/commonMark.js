// @flow
import * as React from 'react';
import type {nodeProps} from './type';

export default function(Tag, type) {
  const MarkComponent = ({attributes, children, mark}: nodeProps) => {
    const color = mark.get('data').get('color');

    return (
      <Tag
        {...attributes}
        style={{
          color,
          // dropdown values
          [type]: mark.get('data').get('value')
        }}
        data-slate-type={type || Tag}>
        {children}
      </Tag>
    );
  };

  MarkComponent.displayName = `${Tag}-mark`;

  return MarkComponent;
}
