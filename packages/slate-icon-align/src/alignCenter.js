import React, {Component} from 'react';
import ToolbarIcon from '../toolbarIcon';
import alignDecorator from './alignDecorator';

@alignDecorator('align', 'AlignCenter', 'center')
export default class AlignCenter extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

