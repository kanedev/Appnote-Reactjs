import React, { Component } from 'react'
 import ShowNews from './ShowNews';
export default class News extends Component {

    
    render() {
        return (
            <div>
 <ShowNews  data={this.props.data} edit={this.props.edit} ></ShowNews>
            </div>




        )
    }
}
