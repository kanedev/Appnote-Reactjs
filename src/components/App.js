import React, { Component } from 'react'
import News from './News';
import SearchBar from './SearchBar'
//import ShowSearch from './ShowSearch'
export default class App extends Component {
  state = {
    data:[],
    filtred:[]
}

componentWillMount() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => 

    this.setState({
      data : json
    })
    
    )

}

 onInputChange = (event) => {
 let search = event.target.value;

 const filtredArray = this.state.data.filter(currentItem => {
  return currentItem.title.indexOf(search) > -1;
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
        <SearchBar search={this.onInputChange} ></SearchBar>
        <News edit={this.removeItem} data={this.state.filtred.length>0 ? this.state.filtred : this.state.data}></News>
      </div>
    )
  }
}
