// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import blocklist, {DEFAULT} from '@canner/slate-helper-block-list';
import EditList from 'slate-edit-list'

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
      if (type === 'list-ol') {
        // ol list
        typeOpts = {
          typeOL: this.typeName,
          typeUL: 'list-ul',
          typeItem: 'list-item',
          ordered: true
        };
      } else if (type === 'list-ul') {
        // ul list
        typeOpts = {
          typeUL: this.typeName,
          typeOL: 'list-ol',
          typeItem: 'list-item',
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
