import React, { Component } from 'react'
import News from './News';
import SearchBar from './SearchBar'
//import ShowSearch from './ShowSearch'
export default class App extends Component {
  state = {
    data:[
        {
            title :"title news1",
            body : "the body of the news 1",
        },
        {
          title :"title news2",
          body : "the body of the news 2",
      },
      {
        title :"title news3",
        body : "the body of the news 3",
    },              
    ],
    filtred:[]
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
 let oldData=[...this.state.data];
 oldData.splice(index,1);
 this.setState({
   data : oldData
 })
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
