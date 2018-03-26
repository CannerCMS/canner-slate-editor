import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const ItalicPlugin = {
  renderMark: (props) => {
    if (props.mark.type === 'italic') 
      return commonMark('i')(props);
  }
}
@basicMarkDecorator('italic', 'Italic')
export default class Italic extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
