import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'


export default class Routes extends Component {
    render() {
        return (  
<Switch>
 
   <Route path='/' exact component={Home}/>
   <Route path='/about' component={About}/>
   <Route path='/contact' component={Contact}/>
</Switch>
        )
    }
}
