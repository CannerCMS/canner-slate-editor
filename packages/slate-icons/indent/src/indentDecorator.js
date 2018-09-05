// @flow
import * as React from "react";
import type { IconProps } from "shared/src/types";

export default (type: string, defaultIcon: string) => (
  Block: React.Element<*>
) => {
  return class IndentDecorator extends React.Component<
    IconProps,
    { isShow: boolean }
  > {
    typeName: string;
    constructor(props: IconProps) {
      super(props);
      this.state = {
        isShow: false
      };

      this.typeName = this.props.type || type;
    }

    onClick = (e: Event) => {
      e.preventDefault();
      const { change, onChange } = this.props;
      const { value } = change;

      if (value.blocks) {
        value.blocks.forEach(block => {
          const getBlockIndent =
            (block.get("data") && block.get("data").get("indent")) || 0;
          let indent = getBlockIndent;

          if (defaultIcon === "Outdent") {
            if (getBlockIndent !== 0) {
              indent = getBlockIndent - 1;
            }
          } else if (defaultIcon === "Indent") {
            if (getBlockIndent <= 8) {
              // max indent
              indent = getBlockIndent + 1;
            }
          }

          const newData = block.setIn(["data", "indent"], indent);

          change.setBlocks(newData);
        });
      }

      onChange(change);
    };

    render() {
      const { icon, ...rest } = this.props;
      const onClick = e => this.onClick(e);

      return (
        // $FlowFixMe
        <Block
          type={this.typeName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={false}
          {...rest}
        />
      );
    }
  };
};
