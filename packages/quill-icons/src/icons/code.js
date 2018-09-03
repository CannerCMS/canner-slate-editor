import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";
import cx from "classnames";

const pickProperties = ["width", "height", "strokeClassName", "evenClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Code extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, evenClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <polyline
          className={cx(evenClassName, strokeClassName)}
          points="5 7 3 9 5 11"
        />
        <polyline
          className={cx(evenClassName, strokeClassName)}
          points="13 7 15 9 13 11"
        />
        <line className={strokeClassName} x1="10" x2="8" y1="5" y2="13" />
      </svg>
    );
  }
}
