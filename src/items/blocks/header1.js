import React, {Component} from 'react';
import ToolbarIcon from '../toolbarIcon';
import headerDecorator from './headerDecorator';

@headerDecorator('heading1', 'Header')
export default class Heading1 extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

