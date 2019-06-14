import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddUser from './components/AddUser';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import DeleteNote from './components/DeleteNote';
export default class Routes extends Component {
    render() {
        return (  
<Switch>
 
   <Route path='/' exact component={Home}/>
   <Route path='/about' component={About}/>
   <Route path='/addnote' component={AddNote}/>
   <Route path='/editnote/:id' component={EditNote}/>
   <Route path='/deletenote/:id' component={DeleteNote}/>
   <Route path='/adduser' component={AddUser}/>
   <Route path='/contact' component={Contact}/>
</Switch>
        )
    }
}
