import AlignCenterIcon from "./alignCenter";
import AlignLeftIcon from "./alignLeft";
import AlignRightIcon from "./alignRight";
import { applyChange } from "./alignDecorator";
import isHotkey from "is-hotkey";

const plugin = function(type = "align", hotkey, align) {
  return {
    onKeyDown(event, change) {
      if (isHotkey(hotkey, event)) {
        applyChange(change, type, align);
      }
    }
  };
};

export const AlignCenter = AlignCenterIcon;
export const AlignLeft = AlignLeftIcon;
export const AlignRight = AlignRightIcon;

export const AlignCenterPlugin = type => {
  return plugin(type, "ctrl+opt+c", "center");
};

export const AlignLeftPlugin = type => {
  return plugin(type, "ctrl+opt+l", "left");
};

export const AlignRightPlugin = type => {
  return plugin(type, "ctrl+opt+r", "right");
};
