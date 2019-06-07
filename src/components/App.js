import React, { Component } from 'react'
import News from './News';
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
  render() {
    return (
      <div>
        <News data={this.state.data}>Hello</News>
      </div>
    )
  }
}
