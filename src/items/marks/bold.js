import React, {Component} from 'react';
import DEFAULT from '../default';
import basicMarkDecoration from './basicMarkDecoration';
import ToolbarIcon from '../toolbarIcon';

@basicMarkDecoration('bold', DEFAULT.marks.bold)
export default class Bold extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
