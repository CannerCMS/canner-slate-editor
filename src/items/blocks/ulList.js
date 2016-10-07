import React, {Component} from 'react';
import DEFAULT from '../default';
import pluginListDecorator from './pluginListDecorator';
import ToolbarIcon from '../toolbarIcon';

@pluginListDecorator('ul_list', DEFAULT.blocks['list-ul'])
export default class UlList extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
