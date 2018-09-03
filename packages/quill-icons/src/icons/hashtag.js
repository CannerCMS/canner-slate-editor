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

export default class Hashtag extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <line className={strokeClassName} x1="7" x2="6" y1="3" y2="15" />
        <line className={strokeClassName} x1="12" x2="11" y1="3" y2="15" />
        <line className={strokeClassName} x1="3.75" x2="14.75" y1="7" y2="7" />
        <line
          className={strokeClassName}
          x1="3.25"
          x2="14.25"
          y1="11"
          y2="11"
        />
      </svg>
    );
  }
}
