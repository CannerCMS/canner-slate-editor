import React, {Component} from 'react';
import pluginListDecorator from './pluginListDecorator';
import ToolbarIcon from '../toolbarIcon';

@pluginListDecorator('list-ol', 'ListOrdered')
export default class OlList extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
