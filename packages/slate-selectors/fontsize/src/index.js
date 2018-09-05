// @flow
import * as React from "react";
import type { IconProps } from "shared/src/types";
import { Dropdown, Menu } from "antd";
import ToolbarIcon from "@canner/slate-icon-shared";
import { markAttrs } from "@canner/slate-icon-shared";
import { FONTSIZE } from "@canner/slate-constant/lib/marks";
import { SharedMarkSelectorDecoration } from "@canner/slate-select-shared";
import commonMark from "@canner/slate-editor-renderer/lib/commonMark";
import omit from "lodash.omit";

export const FontSizePlugin = opt => {
  const options = Object.assign(
    {
      type: FONTSIZE,
      tagName: "span",
      fontSize: markAttrs.fontSize
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
@SharedMarkSelectorDecoration(FONTSIZE)
export default class fontSize extends React.Component<IconProps> {
  static defaultProps = {
    options: [12, 16, 20, 24, 28, 32],
    displayType: "button"
  };

  render() {
    const {
      options,
      defaultValue,
      onChange,
      displayType,
      icon,
      ...rest
    } = this.props;
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

    if (displayType === "button") {
      return (
        <div {...rest}>
          <Dropdown.Button overlay={menu}>
            <b>Size:</b> {(defaultValue && `${defaultValue}`) || "Default"}
          </Dropdown.Button>
        </div>
      );
    }

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <span>
          <ToolbarIcon
            type={"fontSize"}
            icon={icon || "Size"}
            isActive={defaultValue || false}
            {...rest}
          />
        </span>
      </Dropdown>
    );
  }
}
