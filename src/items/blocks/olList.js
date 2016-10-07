import React, {Component} from 'react';
import DEFAULT from '../default';
import pluginListDecorator from './pluginListDecorator';
import ToolbarIcon from '../toolbarIcon';

@pluginListDecorator('ol_list', DEFAULT.blocks['list-ol'])
export default class OlList extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
