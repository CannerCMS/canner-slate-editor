// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import Dropdown from 'react-dropdown';
import {SharedBlockSelectorDecoration} from '@canner/slate-select-shared';

@SharedBlockSelectorDecoration('lineHeight')
export default class LetterSpacing extends React.Component<IconProps> {
  static defaultProps = {
    options: [1, 1.5, 2, 2.5, 3, 3.5, 4]
  }

  render() {
    const {options, defaultValue, onChange} = this.props;

    return (
      <Dropdown
        options={['Default', ...options.map(opt => `${opt}`)]}
        value={defaultValue}
        onChange={onChange}
        placeholder="Line height"
        />
    );
  }
}
