import { Map } from "immutable";

export default (change, { data }) => {
  const { value } = change;
  const inlines = value.inlines;
  // if have inlines
  if (inlines) {
    inlines.forEach(type => {
      const mapData = Map(data);
      const originalDataAttr = type.get("data") || Map({});
      const newData = originalDataAttr.merge(mapData);

      const newType = type.set("data", newData);
      // reset current type with new data
      change.setInlines(newType);
    });
  }

  return change;
};
