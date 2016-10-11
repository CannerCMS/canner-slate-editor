import React, {Component} from 'react';
import pluginListDecorator from './pluginListDecorator';
import ToolbarIcon from '../toolbarIcon';

@pluginListDecorator('list-ul', 'ListBullet')
export default class UlList extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
