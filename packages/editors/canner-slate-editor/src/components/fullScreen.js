// @flow
import React from "react";

type Props = {
  className: string,
  goFull: () => void,
  isFull?: boolean
};

export default class FullScreen extends React.Component<Props> {
  render() {
    const { className, goFull, isFull } = this.props;

    return (
      <svg
        className={className}
        onClick={goFull}
        height="18"
        width="18"
        viewBox="0 0 48 48"
      >
        <path d="M0 0h48v48h-48z" fill="none" />
        <path
          style={isFull ? { fill: "#CCC" } : {}}
          d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4h-10v10zm24 14h-6v4h10v-10h-4v6zm-6-24v4h6v6h4v-10h-10z"
        />
      </svg>
    );
  }
}
