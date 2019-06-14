import React from 'react'
import {firebaseDB} from '../Firebase'

export default function DeleteNote(props) {

const removeNote = () => {
  
    firebaseDB.ref(`notes/${props.match.params.id}`).remove().then(
        ()=> {
 // Redirection to the home page
props.history.push('/');
              }).catch((e)=>{
        console.log('Error during the delete of your Note'+ e)
    });


}

    return (
        <div>
          {removeNote()}  
        </div>
    )
}
