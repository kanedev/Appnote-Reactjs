import React from 'react'

const ShowSearch = ({data}) => {
    return (
        <div>

<table className="table">
    <thead>
        <tr>
            <th>Title</th>
            <th>Content</th>
 
        </tr>
    </thead>



    <tbody>
        
    {  
data.map((currentItem,i) => {

    return(
        <tr key={i}>
            <td>{currentItem.title}</td>
            <td>{currentItem.body}</td>
        </tr>
    )
})
}

    </tbody>
</table>


 

        </div>
    )
}

export default ShowSearch
