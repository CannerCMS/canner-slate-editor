// @flow
import React, {Component} from 'react';
import ToolbarIcon from '@canner/slate-icon-shared';
import {HEADING_2} from '@canner/slate-constant/lib/blocks';
import headerDecorator from './headerDecorator';

@headerDecorator(HEADING_2, 'Header2')
export default class Heading2 extends Component<{}> {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

