// @flow
/* eslint-disable react/display-name */
import * as React from 'react';
import type {nodeProps} from './type';
import mapValues from 'lodash.mapvalues';

export const tableNode = () => {
  return ({attributes, children}: nodeProps) => {
    return (
      <table>
        <tbody {...attributes}>{children}</tbody>
      </table>
    );
  };
}

export const tableRowNode = () => {
  return ({attributes, children}: nodeProps) => {
    return <tr {...attributes}>{children}</tr>;
  };
}

export const tableCellNode = (stylesAttr) => {
  return ({attributes, children, node}: nodeProps) => {

    return (
      <td
        style={
          Object.assign(
            mapValues(stylesAttr, (val) => val && val(node)),
            {minWidth: '50px'}
          )
        }
        {...attributes}>
        {children}
      </td>
    );
  };
}
