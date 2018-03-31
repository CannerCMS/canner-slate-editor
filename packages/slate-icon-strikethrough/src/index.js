import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import {STRIKETHROUGH} from '@canner/slate-constant/lib/marks';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const StrikeThroughPlugin = (type = STRIKETHROUGH) => {
  return {
    renderMark: (props) => {
      if (props.mark.type === type) 
        return commonMark('s')(props);
    }
  }
}
@basicMarkDecorator(STRIKETHROUGH, 'Strike')
export default class StrikeThrough extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
