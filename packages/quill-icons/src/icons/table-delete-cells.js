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
  "transparentClassName"
];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class TableDeleteCells extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, transparentClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <path
          className={fillClassName}
          d="M15.707,7l1.146-1.146a0.5,0.5,0,1,0-.707-0.707L15,6.293,13.854,5.146a0.5,0.5,0,0,0-.707.707L14.293,7,13.146,8.146a0.5,0.5,0,1,0,.707.707L15,7.707l1.146,1.146a0.5,0.5,0,1,0,.707-0.707Z"
        />
        <path
          className={fillClassName}
          d="M6,5H3A1,1,0,0,0,2,6V8A1,1,0,0,0,3,9H6V5Z"
        />
        <path
          className={fillClassName}
          d="M10,5H7V9h3a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5Z"
        />
        <g className={cx(fillClassName, transparentClassName)}>
          <path d="M8,11h4V9a1,1,0,0,0-1-1H8v3Z" />
          <path d="M7,11V8H4A1,1,0,0,0,3,9v2H7Z" />
          <path d="M7,12H3v2a1,1,0,0,0,1,1H7V12Z" />
          <path d="M8,12v3h3a1,1,0,0,0,1-1V12H8Z" />
          <path d="M8,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H8V6Z" />
          <path d="M4,6H7V2H4A1,1,0,0,0,3,3V5A1,1,0,0,0,4,6Z" />
        </g>
      </svg>
    );
  }
}
