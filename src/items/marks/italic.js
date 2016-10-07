import React, {Component} from 'react';
import DEFAULT from '../default';
import basicMarkDecoration from './basicMarkDecoration';
import ToolbarIcon from '../toolbarIcon';

@basicMarkDecoration('italic', DEFAULT.marks.italic)
export default class Italic extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
