import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import cx from "classnames";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "fillClassName", "strokeClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);
const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Undo extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, strokeClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <polygon
          className={cx(fillClassName, strokeClassName)}
          points="6 10 4 12 2 10 6 10"
        />
        <path
          className={strokeClassName}
          d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
        />
      </svg>
    );
  }
}
