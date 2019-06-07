import React, { Component } from 'react'
import News from './News';
import SearchBar from './SearchBar'
export default class App extends Component {
  state = {
    data:[
        {
            title :"title news 1",
            body : "the body of the news 1",
        },
        {
          title :"title news 2",
          body : "the body of the news 2",
      },
      {
        title :"title news 3",
        body : "the body of the news 3",
    },              
    ],
}

 onInputChange = (event) => {
 console.log(event.target.value); 
}


  render() {
    return (
      <div>
        <SearchBar search={this.onInputChange}></SearchBar>
        <News data={this.state.data}>Hello</News>
      </div>
    )
  }
}
