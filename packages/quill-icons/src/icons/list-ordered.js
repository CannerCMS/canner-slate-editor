import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import cx from "classnames";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = [
  "width",
  "height",
  "strokeClassName",
  "fillClassName",
  "thinClassName"
];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class ListOrdered extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { strokeClassName, fillClassName, thinClassName, ...rest } = omit(
      this.props,
      excludeProperties
    );

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <line className={strokeClassName} x1="7" x2="15" y1="4" y2="4" />
        <line className={strokeClassName} x1="7" x2="15" y1="9" y2="9" />
        <line className={strokeClassName} x1="7" x2="15" y1="14" y2="14" />
        <line
          className={cx(strokeClassName, thinClassName)}
          x1="2.5"
          x2="4.5"
          y1="5.5"
          y2="5.5"
        />
        <path
          className={fillClassName}
          d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
        />
        <path
          className={cx(strokeClassName, thinClassName)}
          d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
        />
        <path
          className={cx(strokeClassName, thinClassName)}
          d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
        />
      </svg>
    );
  }
}
