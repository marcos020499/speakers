import React from 'react';
import Contact from '../components/Contact'
import { createGlobalStyle } from 'styled-components'

function App() {
    return (
        <>
          <GlobalStyle/>
          <Contact/>
        </>
    );
  }
export default App;
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inconsolata', monospace;
  }
`