import React, {Component} from 'react';
import ToolbarIcon from '@canner/slate-icon-shared';
import headerDecorator from './headerDecorator';

@headerDecorator('heading2', 'Header2')
export default class Heading2 extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

