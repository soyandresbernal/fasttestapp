import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
}

export const Component = (props: Props) => {
  return (
    <div>
      <h1>message Component</h1>
      <Button> message component</Button>
      <h2> Hello {props.name}</h2>
    </div>
  );
};

export default Component;
const Button = styled.button`
  display: inline-block;
  color: #f3f3f3;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: #1619ba;
`;
