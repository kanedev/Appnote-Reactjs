import React, { Component } from 'react'

export default class AddNote extends Component {

state = {
  Title : "Note title ..." ,
  Note : "write your note ... "
}


handleTitle = (event) => {
    this.setState ({
  Title : event.target.value
    });
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
            Add a new Note : 

<form onSubmit={this.handleSubmit}>

<div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-1-12 col-form-label">Title : </label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="TitleName" id="TitleId"
                            placeholder={this.state.Title}
                           // value={this.state.Title}
                            onChange={this.handleTitle}
                            />
                        </div>
                    </div>



<div className="form-group row">
  <label htmlFor=""> Note :  </label>
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
