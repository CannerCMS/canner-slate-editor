// @flow
import * as React from "react";
import type { IconProps } from "./types";
import blockAddData from "@canner/slate-helper-block-adddata";
import clearDataKey from "@canner/slate-helper-block-cleardatabykey";
import { haveDataKeyInSomeBlocks } from "@canner/slate-util-have";

export default (type: string) => (Selector: React.Element<*>) => {
  return class SharedSelector extends React.Component<IconProps> {
    typeName: string;
    constructor(props: IconProps) {
      super(props);
      this.typeName = this.props.type || type;
    }

    onChange = ({ value }) => {
      let { change, onChange } = this.props;
      this.setState({ value });

      // if select `default` remove font size settings
      if (value === "Default") {
        return onChange(clearDataKey(change, type).select());
      }

      onChange(blockAddData(change, { data: { [type]: value } }).select());
    };

    render() {
      // eslint-disable-next-line
      const { options, change, onChange, ...rest } = this.props;
      const isActive = haveDataKeyInSomeBlocks(change, type);
      let defaultValue;

      if (isActive) {
        const first = change.value.blocks
          .filter(block => {
            if (block.data && block.data.get(type)) return true;
            return false;
          })
          .first();

        if (first) {
          defaultValue = first.data.get(type);
        }
      }

      return (
        <Selector
          options={options}
          defaultValue={defaultValue}
          onChange={this.onChange}
          {...rest}
        />
      );
    }
  };
};
