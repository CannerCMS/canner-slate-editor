import Slate from "slate";

function deserializeValue(json) {
  return Slate.Value.fromJSON(json, { normalize: false });
}

export default function(name, input, expected, transform) {
  describe(name, () => {
    test("match input and expected yaml", () => {
      const valueInput = deserializeValue(input);
      const newChange = transform(valueInput.change());

      if (expected) {
        const newDocJSon = newChange.value.toJSON();
        expect(newDocJSon).toEqual(deserializeValue(expected).toJSON());
      }
    });
  });
}
