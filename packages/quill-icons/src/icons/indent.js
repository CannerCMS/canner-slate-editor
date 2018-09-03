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

export default class Indent extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <line className={strokeClassName} x1="3" x2="15" y1="14" y2="14" />
        <line className={strokeClassName} x1="3" x2="15" y1="4" y2="4" />
        <line className={strokeClassName} x1="9" x2="15" y1="9" y2="9" />
        <polyline
          className={cx(fillClassName, strokeClassName)}
          points="3 7 3 11 5 9 3 7"
        />
      </svg>
    );
  }
}
