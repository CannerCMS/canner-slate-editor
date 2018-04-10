// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import ToolbarIcon from '@canner/slate-icon-shared';
import isHotkey from 'is-hotkey';

export const RedoPlugin = () => {
  return {
    onKeyDown(event, change) {
      if (isHotkey('cmd+shift+y', event)) {
        change.call(change => change.redo());
      }
    }
  }
}

export default class Redo extends React.Component<IconProps> {
  typeName: string
  constructor(props: IconProps) {
    super(props);
    this.typeName = this.props.type || 'redo';
  }

  onClick = (e: Event) => {
    let {change, onChange} = this.props;
    e.preventDefault();
    onChange(change.redo());
  }

  render() {
    const {icon, change, ...rest} = this.props;
    const onClick = e => this.onClick(e);
    return (
      <ToolbarIcon
        type={this.typeName}
        icon={icon || 'Redo'}
        onClick={onClick}
        disabled={!change.value.hasRedos}
        change={change}
        {...rest}
      />
    );
  }
}
