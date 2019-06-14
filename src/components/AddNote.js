import React, { Component } from 'react'



export default class AddNote extends Component {

state = {
  Title : "" ,
  Body : "",
  errorMessage : '',
  successMessage : ''
  
}

handleTitle = (event) => {
    this.setState ({
  Title : event.target.value
    });
  }
 

  handleBody = (event) => {
    this.setState ({
  Body : event.target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();

if (this.state.Title && this.state.Body !== '') {
    this.setState({
        errorMessage : ''
                
            })
} else {
    this.setState({
errorMessage :  <div className="alert alert-danger" role="alert">
this field is required
</div>
        
    })
    
}

  }

  
    render() {
        console.log(this.state)

        return (
            <div className="container">
            Add a new Note : 
<form onSubmit={this.handleSubmit}>

<div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-1-12 col-form-label d-block">Title : </label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="TitleName" id="TitleId"
                            placeholder={this.state.Title}
                           // value={this.state.Title}
                            onChange={this.handleTitle}
                            />
 <div className="" >
this field is required
</div>
                            
{this.state.errorMessage}
 
                        </div>
                    </div>

<div className="form-group row">
  <label htmlFor=""> Note :  </label>
  <textarea className="form-control" name="BodyName" id="BodyId" rows="3" placeholder=  {this.state.Body} onChange={this.handleBody} >

  </textarea>
  {this.state.errorMessage}
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



