import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";
import cx from "classnames";

const pickProperties = [
  "width",
  "height",
  "strokeClassName",
  "fillClassName",
  "evenClassName"
];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);
const DEFAULT_PROPS = pick(defaultProps, pickProperties);
const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Authorship extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, evenClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <line className={strokeClassName} x1="3" x2="15" y1="15" y2="15" />
        <path
          className={cx(fillClassName, strokeClassName)}
          d="M9,8H9a3,3,0,0,1,3,3v0a0,0,0,0,1,0,0H6a0,0,0,0,1,0,0v0A3,3,0,0,1,9,8Z"
        />
        <path
          className={cx(fillClassName, evenClassName)}
          d="M11,5.01C11,6.021,10,9,9,9S7,6.021,7,5.01c0-1.651.292-2.99,2-2.99S11,3.359,11,5.01Z"
        />
      </svg>
    );
  }
}
