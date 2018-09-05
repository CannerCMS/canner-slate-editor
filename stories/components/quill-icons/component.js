import styled from "styled-components";

export const Container = styled.div`
  margin: 60px auto;

  .section {
    width: 300px;
    padding: 10px;
    float: left;
    text-align: center;
  }

  .section:hover {
    background-color: #eee;
    border-radius: 5px;
  }

  .ql-stroke {
    stroke: #000;
    fill: transparent;
  }

  .ql-stroke-mitter {
    stroke: #000;
    fill: transparent;
  }

  .ql-fill {
    fill: #000;
  }

  .ql-even {
    stroke: #000;
    fill: #fff;
  }

  .ql-color-label {
    fill: red;
  }

  .ql-transparent {
    opacity: 0.2;
  }

  .ql-thin {
    stroke: #000;
    fill: transparent;
    stroke-width: 0.5;
  }
`;
