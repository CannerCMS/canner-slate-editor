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

export default class TableUnmergeCells extends Component {
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
        <rect className={strokeClassName} height="4" width="12" x="3" y="7" />
        <path
          className={cx(fillClassName, transparentClassName)}
          d="M2,2V16H16V2H2ZM14,14H10V11H8v3H4V4H8V7h2V4h4V14Z"
        />
        <line className={strokeClassName} x1="12" x2="12" y1="11" y2="7" />
        <line className={strokeClassName} x1="9" x2="9" y1="11" y2="7" />
        <line className={strokeClassName} x1="6" x2="6" y1="11" y2="7" />
      </svg>
    );
  }
}
