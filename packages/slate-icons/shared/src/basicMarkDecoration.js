// @flow
import * as React from "react";
import type { IconProps } from "./types";
import { haveMarks } from "@canner/slate-util-have";

export default (type: string, defaultIcon: string) => (
  Mark: React.Element<*>
) => {
  return class toggleMarkDecoration extends React.Component<IconProps> {
    typeName: string;
    constructor(props: IconProps) {
      super(props);
      this.typeName = this.props.type || type;
    }

    onClick = (e: Event) => {
      let { change, onChange } = this.props;
      e.preventDefault();
      onChange(change.toggleMark(this.typeName));
    };

    render() {
      const { change, icon, ...rest } = this.props;
      const onClick = e => this.onClick(e);
      return (
        // $FlowFixMe
        <Mark
          type={this.typeName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={haveMarks(change, this.typeName)}
          {...rest}
        />
      );
    }
  };
};
