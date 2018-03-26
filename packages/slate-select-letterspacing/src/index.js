// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import Dropdown from 'react-dropdown';
import {SharedMarkSelectorDecoration} from '@canner/slate-select-shared';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const LetterSpacingPlugin = {
  renderMark: (props) => {
    if (props.mark.type === 'letterSpacing') 
      return commonMark('span', 'letterSpacing')(props);
  }
}
@SharedMarkSelectorDecoration('letterSpacing')
export default class LetterSpacing extends React.Component<IconProps> {
  static defaultProps = {
    options: [1, 1.2, 1.4, 1.6, 1.8, 2]
  }

  render() {
    const {options, defaultValue, onChange} = this.props;

    return (
      <Dropdown
        options={['Default', ...options.map(opt => `${opt}px`)]}
        value={defaultValue}
        onChange={onChange}
        placeholder="Letter spacing"
        />
    );
  }
}
