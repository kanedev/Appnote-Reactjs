import React from 'react'

const SearchBar = (props) => {
    return (
        
            <div className="form-group">

<form className="form-inline my-2 my-lg-0">
          <input  type="text"
            className="form-control" name="SearchBarName" id="SearchBarId" aria-describedby="helpId" placeholder="Search..."
            onChange={props.search}
          />
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>




              {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
            </div>
        
    )
}

export default SearchBar
