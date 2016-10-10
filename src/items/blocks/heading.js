import React, {Component, PropTypes} from 'react';
import Dropdown from 'rc-dropdown';
import Menu, {Item as MenuItem} from 'rc-menu';
import {blocks, utils} from 'slate-plugins';
import ToolbarIcon from '../toolbarIcon';
const {heading} = blocks;
const {hasBlocks} = utils.has;
const {preventDefault} = utils.defaultFunc;

import "../../dropdown.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.onClickHeader = this.onClickHeader.bind(this);
  }

  displayName = this.props.type || 'heading';

  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    icon: PropTypes.string
  };

  onClickHeader(e, headerType) {
    let {state, onChange} = this.props;
    e.preventDefault();
    onChange(heading(state, {type: headerType}));
  }

  render() {
    const items = [
      {element: 'h1', demo: 'Heading 1'},
      {element: 'h2', demo: 'Heading 2'},
      {element: 'h3', demo: 'Heading 3'},
      {element: 'h4', demo: 'Heading 4'}
    ];

    const that = this;
    const {state, onChange, icon, type, ...rest} = this.props; // eslint-disable-line no-unused-vars
    const isActive = hasBlocks(state, this.displayName);
    const whatBlock = state.blocks.map(block => block.type);

    const onSelect = ({item, domEvent}) => {
      that.onClickHeader(domEvent, item.props.eventKey);
    };

    const menu = (
      <Menu onSelect={onSelect}
        selectedKeys={whatBlock}
        onMouseDown={preventDefault}>
        {
          items.map((item, i) => {
            const count = i + 1;
            const element = React.createElement(item.element,
              {
                style: {cursor: 'pointer'},
                onMouseDown: preventDefault,
                onClick: preventDefault
              }, item.demo);
            return (
              <MenuItem key={this.displayName + count}
                ref={this.displayName + count}>
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
        <ToolbarIcon
          {...this.props}
          isActive={isActive}
          icon={icon || "header"}
        />
      </Dropdown>
    );
  }
}
