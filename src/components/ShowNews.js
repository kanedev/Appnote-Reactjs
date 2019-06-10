import React from 'react'

const ShowNews = ({data,edit}) => {
    return (
        <div>

<table className="table">
    <thead>
        <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Edit</th>
 
        </tr>
    </thead>



    <tbody>
        
    {  
data.map((currentItem,i) => {

    return(
        <tr key={i}>
            <td>{currentItem.title}</td>
            <td>{currentItem.body}</td>
            <td> <button name="button_modification_name" id="button_modification_id" className="btn btn-warning" href="#" onClick={()=> edit(i)} >x</button> </td>

        
        </tr>
    )
})
}

    </tbody>
</table>


 

        </div>
    )
}

export default ShowNews
