import React, { Component } from 'react'
import Composant2 from './composant2';
export default class Mycompclass extends Component {
    state = {
        data:'la vie est belle',
    }
    
    render() {
        return (
            <div>
  Hello, I am the second Component, my state :    {this.state.data}
<br/>
I am sending data to the first 

<Composant2 props1={this.state.data} ></Composant2>
            </div>
        )
    }
}
