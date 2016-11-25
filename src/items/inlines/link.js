/* eslint-disable no-alert */
import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import {inlines, utils} from 'slate-plugins';
const {links} = inlines;
const {haveInlines} = utils.have;

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  displayName = this.props.type || 'link';

  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string
  };

  onClick(e) {
    let {state, onChange} = this.props;
    let haveLinks = haveInlines(state, this.displayName);
    e.preventDefault();

    if (haveLinks) {
      onChange(links(state, this.displayName));
    } else if (state.isExpanded) {
      // prompt for ask url
      const href = window.prompt('Enter the URL of the link:');
      onChange(links(state, this.displayName, {href}));
    } else {
      // prompt for url and text
      const href = window.prompt('Enter the URL of the link:');
      const text = window.prompt('Enter the text for the link:');
      onChange(links(state, this.displayName, {href, text}));
    }
  }

  render() {
    const {state, icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <ToolbarIcon
        type={this.displayName}
        icon={icon || 'Link'}
        onClick={onClick}
        isActive={haveInlines(state, this.displayName)}
        {...rest}
      />
    );
  }
}
