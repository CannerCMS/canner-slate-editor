// @flow
import React, {Component} from 'react';
import ToolbarIcon from '@canner/slate-icon-shared';
import alignDecorator from './alignDecorator';

@alignDecorator('align', 'AlignCenter', 'center')
export default class AlignCenter extends Component<{}> {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

