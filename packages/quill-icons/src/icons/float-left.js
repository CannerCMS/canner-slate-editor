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

export default class FloatLeft extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <path
          className={fillClassName}
          d="M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z"
        />
        <path
          className={fillClassName}
          d="M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z"
        />
        <path
          className={fillClassName}
          d="M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z"
        />
        <path
          className={fillClassName}
          d="M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z"
        />
        <rect
          className={fillClassName}
          x="2"
          y="6"
          width="8"
          height="6"
          rx="1"
          ry="1"
        />
      </svg>
    );
  }
}
