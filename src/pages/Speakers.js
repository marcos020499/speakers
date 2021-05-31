import Home from '../components/Home'
import React from 'react';
import YoutubeEmbed from "../components/Youtube/index";
import { createGlobalStyle } from 'styled-components'

function App() {
    return (
        <>
            <GlobalStyle/>
            <Home/>
        </>
    );
  }
  export default App;
  const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inconsolata', monospace;
  }
`