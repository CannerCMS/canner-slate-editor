import React, {Component} from 'react';
import ToolbarIcon from '../toolbarIcon';
import indentDecorator from './indentDecorator';

@indentDecorator('indent', 'Indent')
export default class Indent extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

