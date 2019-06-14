import React, { Component } from 'react'
import {firebaseDB} from '../../Firebase'


export default class FormNote extends Component {

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

componentWillMount() {


    if (this.props.type === 'edit') {
        
        // request data from database 
        firebaseDB.ref(`notes/${this.props.id}`).once('value').then(
            (snapshot) => { 
              //  console.log(snapshot.val()) 
this.setState({
Title : snapshot.val().titleNote ,
Body  : snapshot.val().bodyNote

})
             }
        ).catch((e)=>{
            console.log('Error during connection to the database'+ e)
        });

    } else {
        
    }
}




  handleSubmit = (event) => {
    event.preventDefault();

if (this.state.Title && this.state.Body !== '') {
    this.setState({
        errorMessage : ''
               })

 let Note = {
titleNote : this.state.Title,
bodyNote : this.state.Body,
 }

 switch (this.props.type) {
     case 'edit':
    // Updating a Note    

    firebaseDB.ref(`notes/${this.props.id}`).update(Note).then(
        ()=> {
            this.setState({
                successMessage : <div className="alert alert-primary">
                Your note was succefully updated <span role="img" aria-label="note saved">😍 </span>
                </div>
                       })
      }
    ).catch((e)=>{
        console.log('Error during the update of the database'+ e)
    });

         break;
         case 'add':
          // Adding a nem Note
     //Sending Note to the Firebase DB
firebaseDB.ref('notes').push(Note).then(
    ()=> {
        this.setState({
            successMessage : <div className="alert alert-primary">
            Your note was succefully saved <span role="img" aria-label="note saved">😍 </span>
            </div>
                   })
  }
).catch((e)=>{
    console.log('Error during sendind Data to the database'+ e)
});
            break;    
 
     default:
         break;
 }



  






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
            Add a new Note :  {this.state.successMessage}
<form type="add" onSubmit={this.handleSubmit}>

<div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-1-12 col-form-label d-block">Title : </label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="TitleName" id="TitleId"
                            placeholder={this.state.Title}
                           // value={this.state.Title}
                            onChange={this.handleTitle}
                            />
 
                            
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



