import React, {Component, PropTypes} from 'react';
import DEFAULT from '../default';
import Dropdown from 'rc-dropdown';
import Menu, {Item as MenuItem} from 'rc-menu';
import {blocks, utils} from 'slate-plugins';
const {heading} = blocks;
const {hasBlocks} = utils.has;
const {preventDefault} = utils.defaultFunc;

import "../../dropdown.less";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.onClickHeader = this.onClickHeader.bind(this);
  }

  displayName = 'heading';

  static propTypes = {
    state: PropTypes.object,
    onChange: PropTypes.func
  };

  onClickHeader(e, props) {
    let {state, onChange} = this.props;
    e.preventDefault();
    onChange(heading(state, props.type));
  }

  render() {
    const opt = DEFAULT.blocks.heading;
    const that = this;
    const {state} = this.props;
    const isActive = hasBlocks(state, this.displayName);

    const onSelect = ({item, domEvent}) => {
      const headerProps = item.props['data-header'];
      that.onClickHeader(domEvent, headerProps);
    };

    const menu = (
      <Menu onSelect={onSelect} onMouseDown={preventDefault}>
        {
          opt.items.map(item => {
            const element = React.createElement(item.element,
              {style: {cursor: 'pointer'}, onMouseDown: preventDefault}, item.demo);
            return (
              <MenuItem key={item.type} ref={item.type} data-header={item}>
                {element}
              </MenuItem>
            );
          })
        }
      </Menu>
    );

    return (
      <Dropdown
        key="header"
        trigger={['click']}
        overlay={menu}
        animation="slide-up"
      >
        <span className="slate-toolbar-item" data-active={isActive}
          onMouseDown={preventDefault}>
          <i className="fa fa-header" />
          <i className="fa fa-angle-down" />
        </span>
      </Dropdown>
    );
  }
}
