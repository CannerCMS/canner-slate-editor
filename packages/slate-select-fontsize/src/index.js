// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import Dropdown from 'react-dropdown';
import {SharedMarkSelectorDecoration} from '@canner/slate-select-shared';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const FontSizePlugin = {
  renderMark: (props) => {
    if (props.mark.type === 'fontSize') 
      return commonMark('span', 'fontSize')(props);
  }
}
@SharedMarkSelectorDecoration('fontSize')
export default class fontSize extends React.Component<IconProps> {
  static defaultProps = {
    options: [12, 16, 20, 24, 28, 32]
  }

  render() {
    const {options, defaultValue, onChange} = this.props;

    return (
      <Dropdown
        options={['Default', ...options.map(opt => `${opt}px`)]}
        value={defaultValue}
        onChange={onChange}
        placeholder="Font Size"
        />
    );
  }
}
