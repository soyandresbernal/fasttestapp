import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
}

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];
const listItems = products.map((product) => (
  <li
    key={product.id}
    style={{
      color: product.isFruit ? "magenta" : "darkgreen",
    }}
  >
    {product.title}
  </li>
));

export const Component = (props: Props) => {
  return (
    <div>
      <h1>message Component</h1>
      <Button> message component</Button>
      <h2> Hello {props.name}</h2>
      <ul>{listItems}</ul>
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
