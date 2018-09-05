// @flow
import * as React from "react";
import type { Node } from "slate";

export type nodeProps = {
  children: React.Element<*>,
  attribute: Object,
  node: Node
};
