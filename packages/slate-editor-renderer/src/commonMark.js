// @flow
import * as React from 'react';
import type {nodeProps} from './type';

export default function(Tag, type, dataKey) {
  const MarkComponent = ({attributes, children, mark}: nodeProps) => {

    return (
      <Tag
        {...attributes}
        style={{
          // appy values to style
          [type]: mark.get('data').get(dataKey || type)
        }}
        data-slate-type={type || Tag}>
        {children}
      </Tag>
    );
  };

  MarkComponent.displayName = `${Tag}-mark`;

  return MarkComponent;
}
