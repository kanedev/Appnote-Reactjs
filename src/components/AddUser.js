import React, { Component } from 'react'

export default class AddUser extends Component {

state = {
  FirstName : "your first Name" ,
  LastName : "Your last name",
  City : "Choose your city",
  Bio : "tell us something about you ... "
}

handleFirstName = (event) => {
  this.setState ({
FirstName : event.target.value
  });
}

handleLastName = (event) => {
    this.setState ({
  LastName : event.target.value
    });
  }

  handleCity = (event) => {
    this.setState ({
  City : event.target.value
    });
  }

  handleBio = (event) => {
    this.setState ({
  Bio : event.target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
  }

  
    render() {
        console.log(this.state)

        return (
            <div className="container">
            Add a new user : 
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-1-12 col-form-label">First Name : </label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="FirstNameName" id="FirstNameId"
                            placeholder={this.state.FirstName}
                           // value={this.state.FirstName}
                            onChange={this.handleFirstName}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-1-12 col-form-label">Last Name : </label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="LastNameName" id="LastNameId"
                            placeholder={this.state.LastName}
                            //value={this.state.LastName}
                              onChange={this.handleLastName}
                            />
                        </div>
                    </div>
<div className="form-group">
    <label htmlFor="">City : </label>
    <select className="custom-select" name="CityName" id="CityId" onChange={this.handleCity}>
        <option defaultValue>{this.state.City}</option>
        <option value="Paris">Paris</option>
        <option value="Lyon">Lyon</option>
        <option value="Nice">Nice</option>
    </select>
</div>


<div className="form-group">
  <label htmlFor="">About you : </label>
  <textarea className="form-control" name="BioName" id="BioId" rows="3" placeholder=  {this.state.Bio} onChange={this.handleBio} >

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
