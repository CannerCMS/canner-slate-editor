import React, {Component} from 'react';
import DEFAULT from '../default';
import basicMarkDecoration from './basicMarkDecoration';
import ToolbarIcon from '../toolbarIcon';

@basicMarkDecoration('strikethrough', DEFAULT.marks.strikethrough)
export default class StrikeThrough extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
