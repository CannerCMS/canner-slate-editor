// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import TablePicker, {nodeAttrs} from 'create-table-picker';
import ToolbarIcon from '@canner/slate-icon-shared';
import {TABLE, TABLE_ROW, TABLE_CELL} from '@canner/slate-constant/lib/blocks';
import EditTable from 'slate-edit-table';
import {tableNode, tableRowNode, tableCellNode} from '@canner/slate-editor-renderer/lib/tableNode';
import type {Data} from 'react-hovertable';
import omit from 'lodash.omit';

export const TablePlugin = (opt) => {
  const options = Object.assign({
    typeTable: TABLE,
    typeRow: TABLE_ROW,
    typeCell: TABLE_CELL,
    ...nodeAttrs
  }, opt);

  return {
    renderNode: (props) => {
      if (props.node.type === options.typeTable) 
        return tableNode()(props);
      else if (props.node.type === options.typeRow)
        return tableRowNode()(props);
      else if (props.node.type === options.typeCell)
        return tableCellNode(omit(options, ['typeTable', 'typeRow', 'typeCell']))(props);
    }
  }
}

export default class Table extends React.Component<IconProps> {
  typeName: string
  constructor(props: IconProps) {
    super(props);
    this.typeName = this.props.typeTable || TABLE;
    
    this.editTable = EditTable(this.props.options || {});
  }

  onChange = (data: Data) => {
    let {change, onChange} = this.props;
    onChange(
      this.editTable.changes.insertTable(
        change,
        data.columnNumber,
        data.rowNumber
      )
    );
  }

  render() {
    const {icon, ...rest} = this.props;

    return (
      <TablePicker
        onChange={this.onChange}>
        <ToolbarIcon
          type={this.typeName}
          icon={icon || 'Table'}
          isActive={false}
          {...rest}
        />
      </TablePicker>
    );
  }
}
