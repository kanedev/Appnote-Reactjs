import React, { Component } from 'react'
 
export default class News extends Component {

    
    render() {
        return (
            <div>
dfd
<br></br>
News : {  
   this.props.data.map(currentItem => {

        return(
            <div>
{currentItem.title} => {currentItem.body}
            </div>
        )
    })
    

}

            </div>
        )
    }
}
