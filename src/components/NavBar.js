import React from 'react';
import './NavBar.css';

export const NavBar = (props) => {

 return (
        <div className="nav-container">
              <input 
              type="text"
              placeholder="Filter by year"
              value={props.value}
 		      onChange={(event) => props.setMoviesByYear(event.target.value)}>
              </input>
        </div>
 )
}