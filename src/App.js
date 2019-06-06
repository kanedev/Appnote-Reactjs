import React from 'react';
import logo from './logo.svg';
import './App.css';
import Composant2 from './composant2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       Welcome to first react app
        </p>


<Composant2  props1="contenu 1.1" props2="contenu 1.2" >Child 1</Composant2>
<Composant2  props1="contenu 2.1" props2="contenu 2.2"  >Child 2</Composant2>
<Composant2  props1="contenu 3.1" props2="contenu 3.2"  >Child 3</Composant2>
     
      </header>
    </div>
  );
}

export default App;
