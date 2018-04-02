import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import {STRIKETHROUGH} from '@canner/slate-constant/lib/marks';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const StrikeThroughPlugin = (opt) => {
  const options = Object.assign({
    type: STRIKETHROUGH,
    tagName: 's'
  }, opt);

  return {
    renderMark: (props) => {
      if (props.mark.type === options.type) 
        return commonMark(options.tagName)(props);
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
