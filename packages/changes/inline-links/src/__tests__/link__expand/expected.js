/** @jsx h */
import h from "slate-hyperscript";

module.exports = (
  <value>
    <document>
      <block type="paragraph">
        <inline type="link" data={{ href: "http://example.com/" }}>
          H
        </inline>
        ello World
      </block>
    </document>
  </value>
);
