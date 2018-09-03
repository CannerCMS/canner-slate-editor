import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class HorizontalRule extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <path
          className={fillClassName}
          d="M15,12v2a.99942.99942,0,0,1-1,1H4a.99942.99942,0,0,1-1-1V12a1,1,0,0,1,2,0v1h8V12a1,1,0,0,1,2,0ZM14,3H4A.99942.99942,0,0,0,3,4V6A1,1,0,0,0,5,6V5h8V6a1,1,0,0,0,2,0V4A.99942.99942,0,0,0,14,3Z"
        />
        <path
          className={fillClassName}
          d="M15,10H3A1,1,0,0,1,3,8H15a1,1,0,0,1,0,2Z"
        />
      </svg>
    );
  }
}
