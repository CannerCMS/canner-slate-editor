import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import cx from "classnames";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "strokeClassName", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class DirectionLtr extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <polygon
          className={cx(strokeClassName, fillClassName)}
          points="3 11 5 9 3 7 3 11"
        />
        <line
          className={cx(strokeClassName, fillClassName)}
          x1="15"
          x2="11"
          y1="4"
          y2="4"
        />
        <path className={fillClassName} d="M11,3a3,3,0,0,0,0,6h1V3H11Z" />
        <rect className={fillClassName} height="11" width="1" x="11" y="4" />
        <rect className={fillClassName} height="11" width="1" x="13" y="4" />
      </svg>
    );
  }
}
