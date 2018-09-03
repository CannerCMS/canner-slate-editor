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
  "strokeMitterClassName"
];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class TableBorderBottom extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const {
      fillClassName,
      transparentClassName,
      strokeMitterClassName,
      ...rest
    } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <g className={cx(fillClassName, transparentClassName)}>
          <rect
            height="2"
            transform="translate(18 -12) rotate(90)"
            width="2"
            x="14"
            y="2"
          />
          <rect
            height="2"
            transform="translate(21 -9) rotate(90)"
            width="2"
            x="14"
            y="5"
          />
          <rect
            height="2"
            transform="translate(24 -6) rotate(90)"
            width="2"
            x="14"
            y="8"
          />
          <rect
            height="2"
            transform="translate(30 0) rotate(90)"
            width="2"
            x="14"
            y="14"
          />
          <rect
            height="2"
            transform="translate(27 -3) rotate(90)"
            width="2"
            x="14"
            y="11"
          />
          <rect
            height="2"
            transform="translate(6 0) rotate(90)"
            width="2"
            x="2"
            y="2"
          />
          <rect
            height="2"
            transform="translate(9 3) rotate(90)"
            width="2"
            x="2"
            y="5"
          />
          <rect
            height="2"
            transform="translate(12 6) rotate(90)"
            width="2"
            x="2"
            y="8"
          />
          <rect
            height="2"
            transform="translate(18 12) rotate(90)"
            width="2"
            x="2"
            y="14"
          />
          <rect
            height="2"
            transform="translate(15 9) rotate(90)"
            width="2"
            x="2"
            y="11"
          />
        </g>
        <line
          className={strokeMitterClassName}
          x1="2"
          x2="16"
          y1="15"
          y2="15"
        />
        <g className={cx(fillClassName, transparentClassName)}>
          <rect height="2" width="2" x="5" y="2" />
          <rect height="2" width="2" x="8" y="2" />
          <rect height="2" width="2" x="11" y="2" />
          <rect height="2" width="2" x="5" y="14" />
          <rect height="2" width="2" x="8" y="14" />
          <rect height="2" width="2" x="8" y="11" />
          <rect height="2" width="2" x="8" y="8" />
          <rect height="2" width="2" x="8" y="5" />
          <rect
            height="2"
            transform="translate(15 3) rotate(90)"
            width="2"
            x="5"
            y="8"
          />
          <rect
            height="2"
            transform="translate(21 -3) rotate(90)"
            width="2"
            x="11"
            y="8"
          />
          <rect height="2" width="2" x="11" y="14" />
        </g>
      </svg>
    );
  }
}
