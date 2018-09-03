// @flow
import type {Change} from 'slate';
export type IconProps = {
  type: string,
  icon: string,
  change: Change,
  onChange: (change: Change) => void
};
