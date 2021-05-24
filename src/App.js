import Detail from './components/Detail'
import Create from './components/Create'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Speakers from './pages/Speakers'
import Edit from './components/Edit'
import React from 'react';
import { createGlobalStyle } from 'styled-components'
import {HashRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <HashRouter>
        <GlobalStyle/>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/show/:id" component={Detail} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
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