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
        <h2>Components: </h2>
        <hr />
        {components}
      </Container>
    );
  }
}
