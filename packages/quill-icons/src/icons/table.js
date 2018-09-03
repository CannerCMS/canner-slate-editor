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
  "fillClassName",
  "transparentClassName",
  "strokeClassName"
];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Table extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const {
      fillClassName,
      transparentClassName,
      strokeClassName,
      ...rest
    } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <rect className={strokeClassName} height="12" width="12" x="3" y="3" />
        <rect className={fillClassName} height="2" width="3" x="5" y="5" />
        <rect className={fillClassName} height="2" width="4" x="9" y="5" />
        <g className={cx(fillClassName, transparentClassName)}>
          <rect height="2" width="3" x="5" y="8" />
          <rect height="2" width="4" x="9" y="8" />
          <rect height="2" width="3" x="5" y="11" />
          <rect height="2" width="4" x="9" y="11" />
        </g>
      </svg>
    );
  }
}
