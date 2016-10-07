import React, {Component} from 'react';
import DEFAULT from '../default';
import basicMarkDecoration from './basicMarkDecoration';
import ToolbarIcon from '../toolbarIcon';

@basicMarkDecoration('code', DEFAULT.marks.code)
export default class Code extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
