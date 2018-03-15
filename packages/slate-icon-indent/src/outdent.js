// @flow
import React, {Component} from 'react';
import ToolbarIcon from '@canner/slate-icon-shared';
import indentDecorator from './indentDecorator';

@indentDecorator('outdent', 'Outdent')
export default class Outdent extends Component<{}> {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

