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

export default class AlignJustify extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <line className={strokeClassName} x1="15" x2="3" y1="9" y2="9" />
        <line className={strokeClassName} x1="15" x2="3" y1="14" y2="14" />
        <line className={strokeClassName} x1="15" x2="3" y1="4" y2="4" />
      </svg>
    );
  }
}
