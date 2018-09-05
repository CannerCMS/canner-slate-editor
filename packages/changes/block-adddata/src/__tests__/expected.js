/** @jsx h */
import h from "slate-hyperscript";

module.exports = (
  <value>
    <document>
      <block type="paragraph">
        <block type="paragraph" data={{ foo: "bar" }}>
          Hello World
        </block>
      </block>
    </document>
  </value>
);
