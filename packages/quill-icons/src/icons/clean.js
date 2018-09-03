import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "strokeClassName", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Clean extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <line className={strokeClassName} x1="5" x2="13" y1="3" y2="3" />
        <line className={strokeClassName} x1="6" x2="9.35" y1="12" y2="3" />
        <line className={strokeClassName} x1="11" x2="15" y1="11" y2="15" />
        <line className={strokeClassName} x1="15" x2="11" y1="11" y2="15" />
        <rect
          className={fillClassName}
          height="1"
          rx="0.5"
          ry="0.5"
          width="7"
          x="2"
          y="14"
        />
      </svg>
    );
  }
}
