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

export default class TableBorderTop extends Component {
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
            transform="translate(-12 18) rotate(-90)"
            width="2"
            x="2"
            y="14"
          />
          <rect
            height="2"
            transform="translate(-9 15) rotate(-90)"
            width="2"
            x="2"
            y="11"
          />
          <rect
            height="2"
            transform="translate(-6 12) rotate(-90)"
            width="2"
            x="2"
            y="8"
          />
          <rect
            height="2"
            transform="translate(0 6) rotate(-90)"
            width="2"
            x="2"
            y="2"
          />
          <rect
            height="2"
            transform="translate(-3 9) rotate(-90)"
            width="2"
            x="2"
            y="5"
          />
          <rect
            height="2"
            transform="translate(0 30) rotate(-90)"
            width="2"
            x="14"
            y="14"
          />
          <rect
            height="2"
            transform="translate(3 27) rotate(-90)"
            width="2"
            x="14"
            y="11"
          />
          <rect
            height="2"
            transform="translate(6 24) rotate(-90)"
            width="2"
            x="14"
            y="8"
          />
          <rect
            height="2"
            transform="translate(12 18) rotate(-90)"
            width="2"
            x="14"
            y="2"
          />
          <rect
            height="2"
            transform="translate(9 21) rotate(-90)"
            width="2"
            x="14"
            y="5"
          />
        </g>
        <line className={strokeMitterClassName} x1="16" x2="2" y1="3" y2="3" />
        <g className={cx(fillClassName, transparentClassName)}>
          <rect
            height="2"
            transform="translate(24 30) rotate(-180)"
            width="2"
            x="11"
            y="14"
          />
          <rect
            height="2"
            transform="translate(18 30) rotate(-180)"
            width="2"
            x="8"
            y="14"
          />
          <rect
            height="2"
            transform="translate(12 30) rotate(-180)"
            width="2"
            x="5"
            y="14"
          />
          <rect
            height="2"
            transform="translate(24 6) rotate(-180)"
            width="2"
            x="11"
            y="2"
          />
          <rect
            height="2"
            transform="translate(18 6) rotate(-180)"
            width="2"
            x="8"
            y="2"
          />
          <rect
            height="2"
            transform="translate(18 12) rotate(-180)"
            width="2"
            x="8"
            y="5"
          />
          <rect
            height="2"
            transform="translate(18 18) rotate(-180)"
            width="2"
            x="8"
            y="8"
          />
          <rect
            height="2"
            transform="translate(18 24) rotate(-180)"
            width="2"
            x="8"
            y="11"
          />
          <rect
            height="2"
            transform="translate(3 21) rotate(-90)"
            width="2"
            x="11"
            y="8"
          />
          <rect
            height="2"
            transform="translate(-3 15) rotate(-90)"
            width="2"
            x="5"
            y="8"
          />
          <rect
            height="2"
            transform="translate(12 6) rotate(-180)"
            width="2"
            x="5"
            y="2"
          />
        </g>
      </svg>
    );
  }
}
