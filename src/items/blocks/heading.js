import React, {Component, PropTypes} from 'react';
import Dropdown from 'rc-dropdown';
import Menu, {Item as MenuItem} from 'rc-menu';
import {blocks, utils} from 'slate-plugins';
import FontAwesome from 'react-fontawesome';
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
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  onClickHeader(e, headerType) {
    let {state, onChange} = this.props;
    e.preventDefault();
    onChange(heading(state, headerType));
  }

  render() {
    const items = [
      {element: 'h1', demo: 'Heading 1'},
      {element: 'h2', demo: 'Heading 2'},
      {element: 'h3', demo: 'Heading 3'},
      {element: 'h4', demo: 'Heading 4'}
    ];

    const that = this;
    const {state, onChange, type, ...rest} = this.props; // eslint-disable-line no-unused-vars
    const isActive = hasBlocks(state, this.displayName);

    const onSelect = ({item, domEvent}) => {
      that.onClickHeader(domEvent, item.props.eventKey);
    };

    const menu = (
      <Menu onSelect={onSelect} onMouseDown={preventDefault}>
        {
          items.map((item, i) => {
            const count = i + 1;
            const element = React.createElement(item.element,
              {
                style: {cursor: 'pointer'},
                onMouseDown: preventDefault
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
        <span className="slate-toolbar-item" data-active={isActive}
          onMouseDown={preventDefault}>
          <FontAwesome name="header" {...rest}/>
          <FontAwesome name="angle-down" {...rest}/>
        </span>
      </Dropdown>
    );
  }
}
