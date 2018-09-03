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

export default class Blockquote extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, evenClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <rect
          className={cx(fillClassName, strokeClassName)}
          height="3"
          width="3"
          x="4"
          y="5"
        />
        <rect
          className={cx(fillClassName, strokeClassName)}
          height="3"
          width="3"
          x="11"
          y="5"
        />
        <path
          className={cx(evenClassName, fillClassName, strokeClassName)}
          d="M7,8c0,4.031-3,5-3,5"
        />
        <path
          className={cx(evenClassName, fillClassName, strokeClassName)}
          d="M14,8c0,4.031-3,5-3,5"
        />
      </svg>
    );
  }
}
