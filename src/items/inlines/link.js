import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import DEFAULT from '../default';
import {inlines, utils} from 'slate-plugins';
const {links} = inlines;
const {hasInlines} = utils.has;

export default class Link extends Component {
  constructor(props) {
    super(props);

    this.onClickLink = this.onClickLink.bind(this);
  }

  displayName = 'link';

  static propTypes = {
    state: PropTypes.object,
    onChange: PropTypes.func
  };

  onClickLink(e) {
    let {state, onChange} = this.props;
    e.preventDefault();
    onChange(links(state, this.displayName));
  }

  render() {
    const opt = DEFAULT.inlines.link;
    const {state} = this.props;
    const onClick = e => this.onClickLink(e);

    return (
      <ToolbarIcon
        type={this.displayName}
        icon={opt.icon}
        onClick={onClick}
        isActive={hasInlines(state, this.displayName)}
      />
    );
  }
}
