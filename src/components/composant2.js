import React from 'react';
 

function Composant2(props) {
  return (
    <div>
    <p>
Composant : 2 , props1 = {props.props1}   et props2 = {props.props2} 
    </p>
    <p> {props.children}</p>
  </div>
  );
}

export default Composant2;


