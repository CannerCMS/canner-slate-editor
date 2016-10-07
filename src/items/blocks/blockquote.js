import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import DEFAULT from '../default';
import {blocks, utils} from 'slate-plugins';
const {blockquote} = blocks;
const {isBlockquote} = utils.is;

export default class Blockquote extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  displayName = 'blockquote';

  static propTypes = {
    state: PropTypes.object,
    onChange: PropTypes.func
  };

  onClick(e) {
    let {state, onChange} = this.props;
    e.preventDefault();
    onChange(blockquote(state));
  }

  render() {
    const opt = DEFAULT.blocks['block-quote'];
    const {state} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <ToolbarIcon
        type={this.displayName}
        icon={opt.icon}
        onClick={onClick}
        isActive={isBlockquote(state)}
      />
    );
  }
}
