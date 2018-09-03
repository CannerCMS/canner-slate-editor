import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import cx from "classnames";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "strokeClassName", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class Spacing extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <line className={strokeClassName} x1="10" x2="15" y1="4" y2="4" />
        <line className={strokeClassName} x1="10" x2="15" y1="9" y2="9" />
        <line className={strokeClassName} x1="10" x2="15" y1="14" y2="14" />
        <polygon
          className={cx(fillClassName, strokeClassName)}
          points="3 5 5 3 7 5 3 5"
        />
        <line className={strokeClassName} x1="5" x2="5" y1="7" y2="5" />
        <polygon
          className={cx(fillClassName, strokeClassName)}
          points="3 13 5 15 7 13 3 13"
        />
        <line className={strokeClassName} x1="5" x2="5" y1="11" y2="13" />
      </svg>
    );
  }
}
