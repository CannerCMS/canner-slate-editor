// @flow
import commonMark from '@canner/slate-editor-renderer/lib/commonMark';

export default (props: any) => {
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