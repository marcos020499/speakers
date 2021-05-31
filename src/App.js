import Detail from './components/Detail'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Speakers from './pages/Speakers'
import About from './pages/About'
import React from 'react';
import { createGlobalStyle } from 'styled-components'
import {Route, HashRouter, Switch} from "react-router-dom";


function App() {
  return (
    <HashRouter>
        <GlobalStyle/>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/show/:id" component={Detail} />
        </Switch>
        <Footer/>
    </HashRouter>
  );
}
export default App;
const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    margin: 0;
    background: linear-gradient(gray, black);
    font-family: 'Inconsolata', monospace;
  }
`