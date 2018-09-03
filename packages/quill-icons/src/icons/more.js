import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class HorizontalRule extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <path
          className={fillClassName}
          d="M6,9.5A1.5,1.5,0,1,1,4.5,8,1.5,1.5,0,0,1,6,9.5ZM9.5,8A1.5,1.5,0,1,0,11,9.5,1.5,1.5,0,0,0,9.5,8Zm5,0A1.5,1.5,0,1,0,16,9.5,1.5,1.5,0,0,0,14.5,8Z"
        />
      </svg>
    );
  }
}
