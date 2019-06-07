import React from 'react'

const SearchBar = (props) => {
    return (
        
            <div className="form-group">
              <label >Type your words :</label>
              <input type="text"
                className="form-control" name="SearchBarName" id="SearchBarId" aria-describedby="helpId" placeholder="Search..."
                onChange={props.search}
                ></input>
              {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
            </div>
        
    )
}

export default SearchBar
