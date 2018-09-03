import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";
import cx from "classnames";

const pickProperties = ["width", "height", "strokeClassName", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class DirectionRtl extends Component {
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
          points="15 12 13 10 15 8 15 12"
        />
        <line
          className={cx(strokeClassName, fillClassName)}
          x1="9"
          x2="5"
          y1="4"
          y2="4"
        />
        <path className={fillClassName} d="M5,3A3,3,0,0,0,5,9H6V3H5Z" />
        <rect className={fillClassName} height="11" width="1" x="5" y="4" />
        <rect className={fillClassName} height="11" width="1" x="7" y="4" />
      </svg>
    );
  }
}
