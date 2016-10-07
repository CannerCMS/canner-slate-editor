import React, {Component} from 'react';
import DEFAULT from '../default';
import basicMarkDecoration from './basicMarkDecoration';
import ToolbarIcon from '../toolbarIcon';

@basicMarkDecoration('underline', DEFAULT.marks.underline)
export default class Underline extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
