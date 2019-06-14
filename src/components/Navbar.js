import React from 'react'
import SearchBar from './SearchBar'
import {Link} from "react-router-dom"

const Navbar = ({search}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <Link to="/" className="navbar-brand" >Logo</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addnote" className="nav-link">Add Note</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>


                    </ul>
<SearchBar search={search} ></SearchBar>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
