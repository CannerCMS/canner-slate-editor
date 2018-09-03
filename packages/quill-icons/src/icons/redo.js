import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import cx from "classnames";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "strokeClassName", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Redo extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <polygon
          className={cx(fillClassName, strokeClassName)}
          points="12 10 14 12 16 10 12 10"
        />
        <path
          className={strokeClassName}
          d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
        />
      </svg>
    );
  }
}
