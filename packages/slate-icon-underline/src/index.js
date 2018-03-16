import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';

@basicMarkDecorator('underline', 'Underline')
export default class Underline extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
