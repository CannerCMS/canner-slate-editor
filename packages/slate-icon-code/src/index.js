import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';

@basicMarkDecorator('code', 'Code')
export default class Code extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
