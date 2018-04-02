// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import Dropdown from 'react-dropdown';
import {markAttrs} from '@canner/slate-icon-shared';
import {FONTSIZE} from '@canner/slate-constant/lib/marks';
import {SharedMarkSelectorDecoration} from '@canner/slate-select-shared';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';
import omit from 'lodash.omit';

export const FontSizePlugin = (opt) => {
  const options = Object.assign({
    type: FONTSIZE,
    tagName: 'span',
    fontSize: markAttrs.fontSize
  }, opt);

  return {
    renderMark: (props) => {
      if (props.mark.type === options.type) 
        return commonMark(options.tagName, omit(options, ['type', 'tagName']))(props);
    }
  }
}
@SharedMarkSelectorDecoration(FONTSIZE)
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
