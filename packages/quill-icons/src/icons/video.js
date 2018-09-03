import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "fillClassName", "strokeClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);
const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Video extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, strokeClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <rect className={strokeClassName} height="12" width="12" x="3" y="3" />
        <rect className={fillClassName} height="12" width="1" x="5" y="3" />
        <rect className={fillClassName} height="12" width="1" x="12" y="3" />
        <rect className={fillClassName} height="2" width="8" x="5" y="8" />
        <rect className={fillClassName} height="1" width="3" x="3" y="5" />
        <rect className={fillClassName} height="1" width="3" x="3" y="7" />
        <rect className={fillClassName} height="1" width="3" x="3" y="10" />
        <rect className={fillClassName} height="1" width="3" x="3" y="12" />
        <rect className={fillClassName} height="1" width="3" x="12" y="5" />
        <rect className={fillClassName} height="1" width="3" x="12" y="7" />
        <rect className={fillClassName} height="1" width="3" x="12" y="10" />
        <rect className={fillClassName} height="1" width="3" x="12" y="12" />
      </svg>
    );
  }
}
