import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import {BOLD} from '@canner/slate-constant/lib/marks';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const BoldPlugin = (type = BOLD) => {
  return {
    renderMark: (props) => {
      if (props.mark.type === type) 
        return commonMark('strong')(props);
    }
  }
}

@basicMarkDecorator(BOLD, 'Bold')
export default class Bold extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
