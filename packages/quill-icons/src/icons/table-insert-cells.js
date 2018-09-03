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

export default class TableInsertCells extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, transparentClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <g className={cx(fillClassName, transparentClassName)}>
          <path d="M11,11h4V9a1,1,0,0,0-1-1H11v3Z" />
          <path d="M10,11V8H7A1,1,0,0,0,6,9v2h4Z" />
          <path d="M10,12H6v2a1,1,0,0,0,1,1h3V12Z" />
          <path d="M11,12v3h3a1,1,0,0,0,1-1V12H11Z" />
          <path d="M11,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H11V6Z" />
          <path d="M7,6h3V2H7A1,1,0,0,0,6,3V5A1,1,0,0,0,7,6Z" />
        </g>
        <path
          className={fillClassName}
          d="M5,6H4V5a0.5,0.5,0,0,0-.854-0.354l-2,2a0.5,0.5,0,0,0,0,.707l2,2A0.5,0.5,0,0,0,3.5,9.5a0.494,0.494,0,0,0,.191-0.038A0.5,0.5,0,0,0,4,9V8H5A1,1,0,0,0,5,6Z"
        />
        <path
          className={fillClassName}
          d="M15,5H12V9h3a1,1,0,0,0,1-1V6A1,1,0,0,0,15,5Z"
        />
        <path
          className={fillClassName}
          d="M11,5H8A1,1,0,0,0,7,6V8A1,1,0,0,0,8,9h3V5Z"
        />
      </svg>
    );
  }
}
