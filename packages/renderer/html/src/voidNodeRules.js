// @flow
import React from "react";

export default function(inlineType) {
  return {
    serialize(obj, children) {
      if (obj.type === inlineType) {
        return <p>{children}</p>;
      }
    }
  };
}
