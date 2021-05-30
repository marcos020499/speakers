import Home from '../components/Home'
import React from 'react';
import Suscribe from '../components/Suscribe'
import YoutubeEmbed from "../components/Youtube/index";

function App() {
    return (
        <>
        <YoutubeEmbed embedId="SAIdyBFHfVU" />
        <Home/>
        <Suscribe/>
        </>
    );
  }
  export default App;