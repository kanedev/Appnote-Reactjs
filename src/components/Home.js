import React, { Component } from 'react'
import ShowNews from './ShowNews';
import ShowNotes from './ShowNotes';
//import SearchBar from './SearchBar';
import Navbar from "./Navbar";
import {firebaseDB} from '../Firebase'

//import ShowSearch from './ShowSearch'
export default class Home extends Component {
  state = {
    data:[],
    filtred:[]
}

componentWillMount() {

          firebaseDB.ref('notes').orderByChild('titleNote').once('value').then(
            (snapshot) => { 
              //  console.log(snapshot.val()) 

             const notes = [];
             snapshot.forEach(
                 (snapshotChild) => {
                     notes.push(
                         {
                            id : snapshotChild.key, 
                            ...snapshotChild.val()
                         }
                         )
                 }
             )
 
             this.setState({
               data : notes
             });

            
   }
        ) ;
  

  // Request Data from JSON
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(json => 

  //   this.setState({
  //     data : json
  //   })
    
  //   )

}

 onInputChange = (event) => {
 let search = event.target.value;

 const filtredArray = this.state.data.filter(currentItem => {
  return currentItem.titleNote.indexOf(search) > -1;
 });
 this.setState(
   {filtred : filtredArray}
 );
}

 removeItem = (index) => {

 let oldData = this.state.filtred.length>0 ? this.state.filtred : this.state.data;

if (this.state.filtred.length>0) {
 
  oldData.splice(index,1);

  this.setState({
    filtred : oldData
  })
}
else {
  oldData.splice(index,1);
  this.setState({
    data : oldData,
  })

}

}


render() {
    return (
      <div>
<Navbar search={this.onInputChange} ></Navbar>


        {/* <SearchBar search={this.onInputChange} ></SearchBar> */}
        {/* <ShowNews  data={this.state.filtred.length>0 ? this.state.filtred : this.state.data} edit={this.removeItem}></ShowNews> */}
        <ShowNotes  data={this.state.filtred.length>0 ? this.state.filtred : this.state.data} ></ShowNotes>
      

      </div>
    )
  }
}
