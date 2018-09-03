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
  "thinClassName",
  "strokeClassName"
];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class TableInsertRows extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const {
      fillClassName,
      transparentClassName,
      thinClassName,
      strokeClassName,
      ...rest
    } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <g
          className={cx(
            fillClassName,
            thinClassName,
            transparentClassName,
            strokeClassName
          )}
        >
          <rect height="3" rx="0.5" ry="0.5" width="7" x="4.5" y="2.5" />
          <rect height="3" rx="0.5" ry="0.5" width="7" x="4.5" y="12.5" />
        </g>
        <rect
          className={cx(fillClassName, strokeClassName, thinClassName)}
          height="3"
          rx="0.5"
          ry="0.5"
          width="7"
          x="8.5"
          y="7.5"
        />
        <polygon
          className={cx(fillClassName, strokeClassName, thinClassName)}
          points="4.5 11 2.5 9 4.5 7 4.5 11"
        />
        <line className={strokeClassName} x1="6" x2="4" y1="9" y2="9" />
      </svg>
    );
  }
}
