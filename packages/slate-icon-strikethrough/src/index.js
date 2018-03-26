import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const StrikeThroughPlugin = {
  renderMark: (props) => {
    if (props.mark.type === 'strikethrough') 
      return commonMark('s')(props);
  }
}
@basicMarkDecorator('strikethrough', 'Strike')
export default class StrikeThrough extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
