/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';
import {blocks, utils} from 'slate-plugins';
const {list} = blocks;
const {isList} = utils.is;

export default (type, defaultIcon) => Block => {
  return class pluginDecoration extends Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    displayName = this.props.type || type;
    static propTypes = {
      type: PropTypes.string,
      icon: PropTypes.string,
      state: PropTypes.object.isRequired,
      onChange: PropTypes.func.isRequired
    };

    onClick(e, opts) {
      let {state, onChange} = this.props;
      e.preventDefault();
      onChange(list(state, opts));
    }

    render() {
      const {state, icon, ...rest} = this.props;
      let typeOpts;
      if (type === 'list-ol') {
        // ol list
        typeOpts = {
          typeOL: this.displayName,
          typeUL: 'list-ul',
          typeItem: 'list-item',
          ordered: true
        };
      } else if (type === 'list-ul') {
        // ul list
        typeOpts = {
          typeUL: this.displayName,
          typeOL: 'list-ol',
          typeItem: 'list-item',
          ordered: false
        };
      }
      const onClick = e => this.onClick(e, typeOpts);

      return (
        <Block
          {...rest}
          type={this.displayName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={isList(state, this.displayName, typeOpts)}
        />
      );
    }
  };
};
