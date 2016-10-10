import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import {inlines, utils} from 'slate-plugins';
const {links} = inlines;
const {hasInlines} = utils.has;

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
    e.preventDefault();
    onChange(links(state, this.displayName));
  }

  render() {
    const {state, icon, ...rest} = this.props;
    const onClick = e => this.onClick(e);

    return (
      <ToolbarIcon
        type={this.displayName}
        icon={icon || 'link'}
        onClick={onClick}
        isActive={hasInlines(state, this.displayName)}
        {...rest}
      />
    );
  }
}
