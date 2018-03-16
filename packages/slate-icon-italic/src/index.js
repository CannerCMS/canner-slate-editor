import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';

@basicMarkDecorator('italic', 'Italic')
export default class Italic extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
