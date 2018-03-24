// @flow
import React from 'react';
import type {Classnames} from './types';

import {
  Title,
  Bold,
  Italic,
  Underline,
  Punctuation,
  Code,
  List,
  Hr,
  Url,
} from './components';

export default function renderMark(classnames: Classnames, sizes) {
  return (props) => {
    const { mark } = props;
    switch (mark.type) {
      case 'bold':
        return (
          <Bold
            {...props.attributes}
            className={classnames.bold}
          >
            {props.children}
          </Bold>
        );
      case 'code':
        return (
          <Code
            {...props.attributes}
            className={classnames.code}
          >
            {props.children}
          </Code>
        );
      case 'italic':
        return (
          <Italic
            {...props.attributes}
            className={classnames.italic}
          >
            {props.children}
          </Italic>
        );
      case 'underlined':
        return (
          <Underline
            {...props.attributes}
            className={classnames.underline}
          >
            {props.children}
          </Underline>
        );
      case 'title': {
        const { attributes, children, mark: { data } } = props;
        const level = data.get('level');
        const fontSize =
          (level && sizes[level - 1]) || sizes[sizes.length - 1];
        return (
          <Title
            {...attributes}
            className={classnames.title}
            fontSize={fontSize}
          >
            {children}
          </Title>
        );
      }
      case 'punctuation': {
        return (
          <Punctuation
            {...props.attributes}
            className={classnames.punctuation}
          >
            {props.children}
          </Punctuation>
        );
      }
      case 'list': {
        return (
          <List
            {...props.attributes}
            className={classnames.list}
          >
            {props.children}
          </List>
        );
      }
      case 'hr': {
        return (
          <Hr
            {...props.attributes}
            className={classnames.hr}
          >
            {props.children}
          </Hr>
        );
      }
      case 'url': {
        return (
          <Url
            {...props.attributes}
            className={classnames.url}
          >
            {props.children}
          </Url>
        );
      }
    }
  }
}