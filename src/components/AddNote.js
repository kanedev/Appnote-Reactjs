import React, { Component } from 'react'

export default class AddNote extends Component {

state = {
  Note : "write your note ... "
}

 

  handleNote = (event) => {
    this.setState ({
  Note : event.target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
  }

  
    render() {
        console.log(this.state)

        return (
            <div className="container">

<form onSubmit={this.handleSubmit}>
<div className="form-group">
  <label htmlFor="">Add a new Note :  </label>
  <textarea className="form-control" name="NoteName" id="NoteId" rows="3" placeholder=  {this.state.Note} onChange={this.handleNote} >

  </textarea>
</div>

                    <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
