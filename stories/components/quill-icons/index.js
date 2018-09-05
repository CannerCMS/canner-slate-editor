import React, { Component } from "react";
import PropTypes from "prop-types";
import QuillIcons from "quillIcons/src";
import { Container } from "./component";

class iconSection extends Component {
  static propTypes = {
    naming: PropTypes.string,
    children: PropTypes.any
  };

  render() {
    const { naming, children } = this.props;

    return (
      <div className="section">
        <h3>{naming}</h3>
        {children}
      </div>
    );
  }
}

const keys = Object.keys(QuillIcons);
const components = keys.map(key =>
  React.createElement(
    iconSection,
    { key: key, naming: key },
    React.createElement(QuillIcons[key], { width: 50, height: 50 })
  )
);

export default class QuillIconsDemo extends React.Component {
  render() {
    return (
      <Container>
        <h3>Usage: </h3>

        <pre>
          var quillIcons = require('quill-icons'); <br />
          // icons options see ./src/icons <br />
          // USAGE: <br />
          <br />
          quillIcons.AlignCenter // React element, change to the icon component
          you need!
        </pre>

        <h2>Style settings: (see demo)</h2>

        <div>
          <a
            href="https://github.com/Canner/quill-icons/blob/master/docs/index.html"
            target="_blank"
          >
            https://github.com/Canner/quill-icons/blob/master/docs/index.html
          </a>
        </div>

        <h2>Components: </h2>
        <hr />
        {components}
      </Container>
    );
  }
}
