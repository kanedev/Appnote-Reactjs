import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Composant2 from './composant2';

import Mycompclass from './mycompclass';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       Welcome to first react app
        </p>


<Composant2  props1="contenu 1.1" props2="contenu 1.2" >Hello, I am the first component</Composant2>
 
<Mycompclass></Mycompclass>
     
      </header>
    </div>
  );
}

export default App;
