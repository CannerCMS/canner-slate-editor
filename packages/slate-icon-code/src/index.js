import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import {CODE} from '@canner/slate-constant/lib/marks';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const CodePlugin = (opt) => {
  const options = Object.assign({
    type: CODE,
    tagName: 'code'
  }, opt);

  return {
    renderMark: (props) => {
      if (props.mark.type === options.type) 
        return commonMark(options.tagName)(props);
    }
  }
}

@basicMarkDecorator(CODE, 'Code')
export default class Code extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
