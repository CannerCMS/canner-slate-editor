import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';

@basicMarkDecorator('strikethrough', 'Strike')
export default class StrikeThrough extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
