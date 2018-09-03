import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import cx from "classnames";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

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

export default class Image extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, evenClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <rect className={strokeClassName} height="10" width="12" x="3" y="4" />
        <circle className={fillClassName} cx="6" cy="7" r="1" />
        <polyline
          className={cx(evenClassName, fillClassName)}
          points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
        />
      </svg>
    );
  }
}
