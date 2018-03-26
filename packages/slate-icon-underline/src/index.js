import React, {Component} from 'react';
import ToolbarIcon, {basicMarkDecorator} from '@canner/slate-icon-shared';
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export const UnderlinePlugin = {
  renderMark: (props) => {
    if (props.mark.type === 'underline') 
      return commonMark('u')(props);
  }
}
@basicMarkDecorator('underline', 'Underline')
export default class Underline extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
