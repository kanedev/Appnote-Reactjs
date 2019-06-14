import React from 'react'
import FormNote from './widgets/FormNote'

const EditNote = (props) => {
  
    return (
        <div>
            <FormNote type="edit" id={props.match.params.id}/>
        </div>
    )
}

export default EditNote
