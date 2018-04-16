// @flow
import React, {Component} from 'react';
import ToolbarIcon, {markDecorator, markPlugin} from '@canner/slate-icon-shared';
import {BOLD} from '@canner/slate-constant/lib/marks';

export const BoldPlugin = (opt) => {
  const options = Object.assign({
    type: BOLD,
    tagName: 'strong'
  }, opt);

  return markPlugin(options, 'cmd+b')
}

@markDecorator(BOLD, 'Bold')
export default class Bold extends Component {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}
