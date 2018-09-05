/** @jsx h */
import h from "slate-hyperscript";

module.exports = (
  <value>
    <document>
      <block type="paragraph">
        {"Hello "}
        <inline type="link" data={{ href: "http://example.com" }}>
          example link
        </inline>
        {" World"}
      </block>
    </document>
  </value>
);
