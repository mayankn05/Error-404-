import React from 'react'
import Scarecrow from "./Scarecrow.png";  
import Header from './components/header/header'
import './app.css'

const App =() => {
  return (
  <>
  <div className="header">
  <Header/> </div> 

<div className="data">
  <div>
  <img src={Scarecrow} alt="error404" style={{height: '60vh', width: '40vw'}}/> </div>
  
  <div className="text">
  <h1>I have bad news for you</h1>
  
  <h3>The page you are looking for might be removed or is temporarily unavailable</h3>
  
  <button> BACK TO HOMEPAGE</button>
  
  </div>
</div>
  
  </>
  );
};

export default App;