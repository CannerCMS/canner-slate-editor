/** @jsx h */
import h from "slate-hyperscript";

module.exports = (
  <value>
    <document>
      <block type="paragraph">
        <block type="paragraph" data={{ foo: "bar", foo2: "bar2" }}>
          Hello World
        </block>
      </block>
    </document>
  </value>
);
