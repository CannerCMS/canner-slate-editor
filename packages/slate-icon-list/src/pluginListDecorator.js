// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import blocklist, {DEFAULT} from '@canner/slate-helper-block-list';
import EditList from 'slate-edit-list'
import {OL_LIST, UL_LIST, LIST_ITEM} from '@canner/slate-constant/lib/blocks';

const {isList} = EditList(DEFAULT).utils;

export default (type: string, defaultIcon: string) => (Block: React.Element<*>) => {
  return class pluginDecoration extends React.Component<IconProps> {
    typeName: string
    constructor(props: IconProps) {
      super(props);
      this.typeName = this.props.type || type;
    }

    onClick = (e: Event, opts: {[string]: any}) => {
      let {change, onChange} = this.props;
      e.preventDefault();
      onChange(blocklist(change, opts));
    }

    render() {
      const {change, icon, ...rest} = this.props;
      let typeOpts;
      if (defaultIcon === 'ListOrdered') {
        // ol list
        typeOpts = {
          typeOL: this.typeName,
          typeUL: UL_LIST,
          typeItem: LIST_ITEM,
          ordered: true
        };
      } else if (defaultIcon === 'ListBullet') {
        // ul list
        typeOpts = {
          typeUL: this.typeName,
          typeOL: OL_LIST,
          typeItem: LIST_ITEM,
          ordered: false
        };
      }
      const onClick = e => this.onClick(e, typeOpts);

      return (
        // $FlowFixMe
        <Block
          {...rest}
          type={this.typeName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={isList(change, this.typeName, typeOpts)}
        />
      );
    }
  };
};
