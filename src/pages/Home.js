import Home from "../components/Home";
import React from "react";
import Suscribe from "../components/Suscribe";
import YoutubeEmbed from "../components/Youtube/index";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <YoutubeEmbed embedId="SAIdyBFHfVU" />
      <Home />
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
