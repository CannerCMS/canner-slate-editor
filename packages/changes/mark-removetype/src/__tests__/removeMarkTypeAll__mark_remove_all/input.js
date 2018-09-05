/** @jsx h */
import h from "slate-hyperscript";

module.exports = (
  <value>
    <document>
      <block type="paragraph">
        <mark type="test" data={{ foo: "bar" }}>
          Hello
        </mark>
        {" World"}
      </block>
    </document>
  </value>
);
