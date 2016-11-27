import React, {Component} from 'react';
import ToolbarIcon from '../toolbarIcon';
import indentDecorator from './indentDecorator';

@indentDecorator('outdent', 'Outdent')
export default class Outdent extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

