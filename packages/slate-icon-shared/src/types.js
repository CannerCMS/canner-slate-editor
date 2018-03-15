// @flow
import {Change} from 'slate';
export type IconProps = {
  type: string,
  icon: string,
  change: Change,
  onChange: (change: Change) => void
};
