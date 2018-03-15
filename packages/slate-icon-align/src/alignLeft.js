// @flow
import React, {Component} from 'react';
import ToolbarIcon from '@canner/slate-icon-shared-wrapper';
import alignDecorator from './alignDecorator';

@alignDecorator('align', 'AlignLeft', 'left')
export default class AlignLeft extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
