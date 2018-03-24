// @flow
import styled from 'styled-components';

export const Title = styled.span`
  font-weight: bold;
  font-size: ${p => p.fontSize};
  margin: 1em 0 0.5em 0;
  display: inline-block;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Italic = styled.span`
  font-style: italic;
`;

export const Underline = styled.span`
  font-style: underline;
`;

export const Punctuation = styled.span`
  opacity: 0.2;
`;

export const Code = styled.span`
  font-family: monospace;
  display: inline-block;
  padding: 0 0.2em;
  margin: 0;
  background-color: rgba(27,31,35,0.05);
  border-radius: 3px;
`;

export const List = styled.span`
  padding-left: 0.75em;
  line-height: 1em;
  font-size: 1em;
`;

export const Hr = styled.span`
  border-bottom: 2px solid black;
  display: block;
  opacity: 0.2;
`;

export const Url = styled.span`
  color: blue;
  text-decoration: underline;
`;
