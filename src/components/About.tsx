import styled from "styled-components";

export default function About() {
  function handleClick() {
    alert("Beat me");
  }
  return (
    <>
      <Button onClick={handleClick}>ABOUT</Button>
    </>
  );
}

const Button = styled.button`
  display: inline-block;
  color: #0855e4;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: #d6acac;
`;
