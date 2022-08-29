import "./App.css";
import styled from "styled-components";
import Component from "./components/Component";
import About from "./components/About";

function App() {
  return (
    <div className='App'>
      <h1>message!</h1>
      <Button> CLICK ME Apptsx</Button>
      <Component></Component>
      <About></About>
    </div>
  );
}

export default App;

const Button = styled.button`
  display: inline-block;
  color: #f6f9ff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: #da0c0c;
`;
