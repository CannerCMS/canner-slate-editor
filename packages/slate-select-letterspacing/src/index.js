// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import Dropdown from 'react-dropdown';
import {LETTERSPACING} from '@canner/slate-constant/lib/marks';
import {SharedMarkSelectorDecoration} from '@canner/slate-select-shared';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const LetterSpacingPlugin = (type = LETTERSPACING) => {
  return {
    renderMark: (props) => {
      if (props.mark.type === type) 
        return commonMark('span', 'letterSpacing', type)(props);
    }
  }
}
@SharedMarkSelectorDecoration(LETTERSPACING)
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
