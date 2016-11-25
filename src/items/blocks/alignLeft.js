import React, {Component} from 'react';
import ToolbarIcon from '../toolbarIcon';
import alignDecorator from './alignDecorator';

@alignDecorator('align', 'AlignLeft', 'left')
export default class AlignLeft extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
