import React, { Component } from "react";
import pluginListDecorator from "./pluginListDecorator";
import ToolbarIcon from "@canner/slate-icon-shared";
import { OL_LIST } from "@canner/slate-constant/lib/blocks";

@pluginListDecorator(OL_LIST, "ListOrdered")
export default class OlList extends Component {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
