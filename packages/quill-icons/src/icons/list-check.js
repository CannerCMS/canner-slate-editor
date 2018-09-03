import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "strokeClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class ListCheck extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <line className={strokeClassName} x1="9" x2="15" y1="4" y2="4" />
        <polyline className={strokeClassName} points="3 4 4 5 6 3" />
        <line className={strokeClassName} x1="9" x2="15" y1="14" y2="14" />
        <polyline className={strokeClassName} points="3 14 4 15 6 13" />
        <line className={strokeClassName} x1="9" x2="15" y1="9" y2="9" />
        <polyline className={strokeClassName} points="3 9 4 10 6 8" />
      </svg>
    );
  }
}
