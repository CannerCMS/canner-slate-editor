// @flow
import React from 'react';
import commonMark from '@canner/slate-icon-renderer/lib/commonMark';

export default (props) => {
  const { mark } = props;
  switch (mark.type.toLowerCase()) {
    case 'bold':
      return commonMark('strong')(props);
    case 'code':
      return commonMark('code')(props);
    case 'italic':
      return commonMark('i')(props);
  }
}