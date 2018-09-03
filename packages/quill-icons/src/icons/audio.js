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

export default class Audio extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <ellipse className={fillClassName} cx="10.5" cy="14" rx="2.5" ry="2" />
        <path className={strokeClassName} d="M12,14V3c0,1.5,3,2.021,3,5" />
        <path
          className={fillClassName}
          d="M7,4A5,5,0,0,0,7,14a3.191,3.191,0,0,1,3-2.957V5.023A4.955,4.955,0,0,0,7,4ZM4.06,8.412a0.5,0.5,0,0,1-.49.4,0.485,0.485,0,0,1-.1-0.01,0.5,0.5,0,0,1-.393-0.588A3.98,3.98,0,0,1,6.216,5.079a0.5,0.5,0,0,1,.2.98A2.985,2.985,0,0,0,4.06,8.412ZM7,10A1,1,0,1,1,8,9,1,1,0,0,1,7,10Z"
        />
      </svg>
    );
  }
}
