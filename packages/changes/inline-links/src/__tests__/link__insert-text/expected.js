/** @jsx h */
import h from "slate-hyperscript";

module.exports = (
  <value>
    <document>
      <block type="paragraph">
        He
        <inline type="link" data={{ href: "http://example.com/" }}>
          http://example.com/
        </inline>
        llo World
      </block>
    </document>
  </value>
);
