// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import removeType from '@canner/slate-helper-mark-removetype';
import addMarkOverwrite from '@canner/slate-helper-mark-addoverwrite';
import {haveMarks} from '@canner/slate-util-have';
import {getMarkType} from '@canner/slate-util-get';
import Dropdown from 'react-dropdown';
import {CustomDropdownContainer} from '@canner/slate-select-shared';

export default class fontSize extends React.Component<IconProps> {
  typeName: string
  constructor(props) {
    super(props);
    this.typeName = this.props.type || 'fontSize';
  }

  static defaultProps = {
    options: [12, 16, 20, 24, 28, 32]
  }

  onChange = (value) => {
    let {change, onChange} = this.props;
    this.setState({value});

    // if select `default` remove font size settings
    if (value.label === 'Default') {
      return onChange(removeType(change, this.typeName))
    }
    onChange(addMarkOverwrite(change, {type: this.typeName, data: value}));
  }

  render() {
    // eslint-disable-next-line
    const {options, change, onChange, ...rest} = this.props;
    const isActive = haveMarks(change, this.typeName);
    let defaultFont;

    if (isActive) {
      const first = getMarkType(change, this.typeName).first().get('data');
      defaultFont = first.get('value');
    }

    return (
      <CustomDropdownContainer {...rest}>
        <Dropdown
          options={['Default', ...options.map(opt => `${opt}px`)]}
          value={defaultFont}
          onChange={this.onChange}
          placeholder="Font Size"
          />
      </CustomDropdownContainer>
    );
  }
}
