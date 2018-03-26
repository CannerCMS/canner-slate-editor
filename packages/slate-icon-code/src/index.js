import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const CodePlugin = {
  renderMark: (props) => {
    if (props.mark.type === 'code') 
      return commonMark('code')(props);
  }
}

@basicMarkDecorator('code', 'Code')
export default class Code extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
