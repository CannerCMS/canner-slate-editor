import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const BoldPlugin = {
  renderMark: (props) => {
    if (props.mark.type === 'bold') 
      return commonMark('strong')(props);
  }
}

@basicMarkDecorator('bold', 'Bold')
export default class Bold extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
