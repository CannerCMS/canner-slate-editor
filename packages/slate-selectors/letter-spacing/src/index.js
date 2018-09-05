// @flow
import * as React from "react";
import type { IconProps } from "shared/src/types";
import { markAttrs } from "@canner/slate-icon-shared";

import { Dropdown, Menu } from "antd";
import { LETTERSPACING } from "@canner/slate-constant/lib/marks";
import { SharedMarkSelectorDecoration } from "@canner/slate-select-shared";
import commonMark from "@canner/slate-editor-renderer/lib/commonMark";
import omit from "lodash.omit";

export const LetterSpacingPlugin = opt => {
  const options = Object.assign(
    {
      type: LETTERSPACING,
      tagName: "span",
      letterSpacing: markAttrs.letterSpacing
    },
    opt
  );

  return {
    renderMark: props => {
      if (props.mark.type === options.type)
        return commonMark(options.tagName, omit(options, ["type", "tagName"]))(
          props
        );
    }
  };
};
@SharedMarkSelectorDecoration(LETTERSPACING)
export default class LetterSpacing extends React.Component<IconProps> {
  static defaultProps = {
    options: [1, 1.2, 1.4, 1.6, 1.8, 2]
  };

  render() {
    const { options, defaultValue, onChange, ...rest } = this.props;
    const opt = ["Default", ...options.map(opt => `${opt}px`)];

    const menu = (
      <Menu onClick={({ key }) => onChange({ value: key })}>
        {opt.map(item => (
          <Menu.Item onMouseDown={e => e.preventDefault()} key={item}>
            {item === "Default" ? "Default" : `${item}`}
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <div {...rest}>
        <Dropdown.Button overlay={menu}>
          <b>Letter Spacing:</b>{" "}
          {(defaultValue && `${defaultValue}`) || "Default"}
        </Dropdown.Button>
      </div>
    );
  }
}
