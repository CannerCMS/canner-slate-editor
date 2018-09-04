import fs from 'fs';
import Slate from 'slate';
import readMetadata from 'read-metadata';

function deserializeValue(json) {
  return Slate.Value.fromJSON(
      json,
      { normalize: false }
  );
}

export default function(name, inputPath, expectedPath, transformPath) {
  describe(name, () => {
    test('match input and expected yaml', () => {
      const input = readMetadata.sync(inputPath);

      let expected;
      if (fs.existsSync(expectedPath)) {
        expected = readMetadata.sync(expectedPath);
      }

      const runTransform = require(transformPath).default;
      const valueInput = deserializeValue(input);
      const newChange = runTransform(valueInput.change());

      if (expected) {
        const newDocJSon = newChange.value.toJSON();
        expect(newDocJSon).toEqual(deserializeValue(expected).toJSON());
      }
    });
  });
}
