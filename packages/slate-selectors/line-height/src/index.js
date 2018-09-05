// @flow
import * as React from "react";
import type { IconProps } from "shared/src/types";
import { Dropdown, Menu } from "antd";
import { SharedBlockSelectorDecoration } from "@canner/slate-select-shared";
import ToolbarIcon from "@canner/slate-icon-shared";

@SharedBlockSelectorDecoration("lineHeight")
export default class LetterSpacing extends React.Component<IconProps> {
  static defaultProps = {
    options: [1, 1.5, 2, 2.5, 3, 3.5, 4],
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
    const opt = ["Default", ...options.map(opt => `${opt}`)];

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
            <b>Line Height:</b>{" "}
            {(defaultValue && `${defaultValue}`) || "Default"}
          </Dropdown.Button>
        </div>
      );
    }

    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <span>
          <ToolbarIcon
            type={"lineHeight"}
            icon={icon || "Spacing"}
            isActive={defaultValue || false}
            {...rest}
          />
        </span>
      </Dropdown>
    );
  }
}
