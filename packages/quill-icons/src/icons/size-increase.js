import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "strokeClassName", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class SizeIncrease extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <polyline className={strokeClassName} points="3.5 14 7 4 10.5 14" />
        <line className={strokeClassName} x1="9.45" x2="4.55" y1="11" y2="11" />
        <rect
          className={fillClassName}
          height="5"
          rx="0.5"
          ry="0.5"
          width="1"
          x="13"
          y="4"
        />
        <rect
          className={fillClassName}
          height="5"
          rx="0.5"
          ry="0.5"
          transform="translate(20 -7) rotate(90)"
          width="1"
          x="13"
          y="4"
        />
      </svg>
    );
  }
}
