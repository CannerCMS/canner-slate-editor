import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import {ITALIC} from '@canner/slate-constant/lib/marks';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const ItalicPlugin = (type = ITALIC) => {
  return {
    renderMark: (props) => {
      if (props.mark.type === type) 
        return commonMark('i')(props);
    }
  }
}
@basicMarkDecorator(ITALIC, 'Italic')
export default class Italic extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
