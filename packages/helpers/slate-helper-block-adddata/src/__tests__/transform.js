import addDataToCurrent from '../src';
import {Range} from 'slate';

export default change => {
  const {value} = change;
  const {document} = value;
  const first = document.getFirstText();
  const range = Range.create({
    anchorKey: first.key,
    anchorOffset: 0,
    focusKey: first.key,
    focusOffset: 5
  });

  const nextChange = change
    .select(range);
  
  return addDataToCurrent(nextChange, {data: {foo: 'bar'}});
};
