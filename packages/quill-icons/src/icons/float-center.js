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

export default class FloatCenter extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <path
          className={fillClassName}
          d="M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z"
        />
        <path
          className={fillClassName}
          d="M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z"
        />
        <rect
          className={fillClassName}
          x="3"
          y="6"
          width="12"
          height="6"
          rx="1"
          ry="1"
        />
      </svg>
    );
  }
}
