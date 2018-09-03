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

export default class FloatRight extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <path
          className={fillClassName}
          d="M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z"
        />
        <path
          className={fillClassName}
          d="M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z"
        />
        <path
          className={fillClassName}
          d="M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z"
        />
        <path
          className={fillClassName}
          d="M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z"
        />
        <rect
          className={fillClassName}
          x="8"
          y="6"
          width="8"
          height="6"
          rx="1"
          ry="1"
          transform="translate(24 18) rotate(-180)"
        />
      </svg>
    );
  }
}
