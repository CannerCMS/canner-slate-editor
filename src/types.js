// @flow

export type types =
  | 'title'
  | 'bold'
  | 'italic'
  | 'punctuation'
  | 'underline'
  | 'code'
  | 'list'
  | 'hr'
  | 'url';

export type Classnames = {
  [key: types]: string,
}