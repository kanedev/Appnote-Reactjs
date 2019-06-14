import React from 'react'
import {Link} from "react-router-dom"
const FormNotes = ({data,edit}) => {
   // console.log({data})  
    return (
        <div>

<table className="table">
    <thead>
        <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Edit</th>
            <th>DElETE</th>
 
        </tr>
    </thead>



    <tbody>
     
    {  
data.map((currentItem,i) => {
 
    return(
        <tr key={i}>
            <td>{currentItem.titleNote}</td>
            <td>{currentItem.bodyNote}</td>
            <td> 
            <Link to={`/editnote/${currentItem.id}`}> <button name="button_modification_name" id="button_modification_id" className="btn btn-warning">+</button> </Link>
            </td>
            <td>
            <Link to={`/deletenote/${currentItem.id}`}>  <button name="button_modification_name" id="button_modification_id" className="btn btn-danger" >x</button> </Link></td>
        
        </tr>
    )
})
}

    </tbody>
</table>


 

        </div>
    )
}

export default FormNotes
