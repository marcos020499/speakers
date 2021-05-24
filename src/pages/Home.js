import Home from '../components/Home'
import React from 'react';
import YoutubeEmbed from "../components/Youtube/index";

function App() {
    return (
        <>
        <YoutubeEmbed embedId="SAIdyBFHfVU" />
        <Home/>
        </>
    );
  }
  export default App;