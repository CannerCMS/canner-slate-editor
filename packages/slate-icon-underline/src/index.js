import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import {UNDERLINE} from '@canner/slate-constant/lib/marks';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const UnderlinePlugin = (opt) => {
  const options = Object.assign({
    type: UNDERLINE,
    tagName: 'u'
  }, opt);

  return {
    renderMark: (props) => {
      if (props.mark.type === options.type) 
        return commonMark(options.tagName)(props);
    }
  }
}
@basicMarkDecorator(UNDERLINE, 'Underline')
export default class Underline extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
