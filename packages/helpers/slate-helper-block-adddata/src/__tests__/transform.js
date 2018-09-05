import addDataToCurrent from '../';
import {Range, Point} from 'slate';

export default change => {
  const {value} = change;
  const {document} = value;
  const first = document.getFirstText();
  const range = Range.create({
    anchor: Point.create({
      key: first.key,
      offset: 0
    }),
    focus: Point.create({
      key: first.key,
      offset: 5
    })
  });

  const nextChange = change
    .select(range);
  
  return addDataToCurrent(nextChange, {data: {foo: 'bar'}});
};
