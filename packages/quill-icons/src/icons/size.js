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

export default class Size extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <polyline className={strokeClassName} points="3.5 14 7 4 10.5 14" />
        <line className={strokeClassName} x1="9.45" x2="4.55" y1="11" y2="11" />
        <path
          className={fillClassName}
          d="M12.09,7.55l1.7-1.473a0.337,0.337,0,0,1,.429,0l1.7,1.473A0.261,0.261,0,0,1,15.7,8H12.3A0.261,0.261,0,0,1,12.09,7.55Z"
        />
        <path
          className={fillClassName}
          d="M12.09,10.45l1.7,1.473a0.337,0.337,0,0,0,.429,0l1.7-1.473A0.261,0.261,0,0,0,15.7,10H12.3A0.261,0.261,0,0,0,12.09,10.45Z"
        />
      </svg>
    );
  }
}
