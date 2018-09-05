// @flow
import * as React from "react";
import type { IconProps } from "./types";
import removeType from "@canner/slate-helper-mark-removetype";
import addMarkOverwrite from "@canner/slate-helper-mark-addoverwrite";
import { haveMarks } from "@canner/slate-util-have";
import { getMarkType } from "@canner/slate-util-get";

export default (type: string) => (Selector: React.Element<*>) => {
  return class SharedSelector extends React.Component<IconProps> {
    typeName: string;
    constructor(props: IconProps) {
      super(props);
      this.typeName = this.props.type || type;
    }

    onChange = value => {
      let { change, onChange } = this.props;
      this.setState({ value });

      // if select `default` remove font size settings
      if (value.label === "Default") {
        return onChange(removeType(change, this.typeName));
      }
      onChange(
        addMarkOverwrite(change, {
          type: this.typeName,
          data: {
            [this.typeName]: value.value
          }
        })
      );
    };

    render() {
      // eslint-disable-next-line
      const { options, change, onChange, ...rest } = this.props;
      const isActive = haveMarks(change, this.typeName);
      let defaultFont;

      if (isActive) {
        const first = getMarkType(change, this.typeName)
          .first()
          .get("data");
        defaultFont = first.get(this.typeName);
      }

      return (
        <Selector
          options={options}
          defaultValue={defaultFont}
          onChange={this.onChange}
          {...rest}
        />
      );
    }
  };
};
