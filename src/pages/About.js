import React from "react";
import About from "../components/About";
import Suscribe from "../components/Suscribe";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <About />
      <Suscribe />
    </>
  );
}
export default App;
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inconsolata', monospace;
  }
`;
