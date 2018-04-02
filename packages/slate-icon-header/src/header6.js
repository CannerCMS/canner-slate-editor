// @flow
import React, {Component} from 'react';
import ToolbarIcon from '@canner/slate-icon-shared';
import {HEADING_6} from '@canner/slate-constant/lib/blocks';
import headerDecorator from './headerDecorator';

@headerDecorator(HEADING_6, 'Header6')
export default class Heading6 extends Component<{}> {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

