/* eslint-disable react/prop-types */
import React, {Component, PropTypes} from 'react';

export default (type, defaultIcon) => Block => {
  return class IndentDecorator extends Component {
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

    onClick(e) {
      e.preventDefault();
      let {state, onChange} = this.props;
      let newState = state.transform();

      if (state.blocks) {
        state.blocks.forEach(block => {
          const getBlockIndent = block.get('data') &&
            block.get('data').get('indent') || 0;
          let indent = getBlockIndent;

          if (defaultIcon === 'Outdent') {
            if (getBlockIndent !== 0) {
              indent = getBlockIndent - 1;
            }
          } else if (defaultIcon === 'Indent') {
            if (getBlockIndent <= 8) {
              // max indent
              indent = getBlockIndent + 1;
            }
          }

          const newData = block.setIn(['data', 'indent'], indent);

          newState.setBlock(newData);
        });
      }

      onChange(
        newState.apply()
      );
    }

    render() {
      const {icon, ...rest} = this.props;
      const onClick = e => this.onClick(e);

      return (
        <Block
          type={this.displayName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={false}
          {...rest}
        />
      );
    }
  };
};
