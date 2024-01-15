import React, { useState } from 'react'
import "./topfold.css";

import { Link } from 'react-router-dom';

const TopFold = () => {
  
  const [query, setquery] = useState("");
  const handleSearchChange = (event) => {
    console.log("Searched: ", event.target.value);

  };
  return (
    <div className="topfold">
      {window.location.pathname == '/' ? (<div className="home-topfold">
        <div className="searchbar">
          <i className="fi-rr-search"></i>
          <input
            placeholder="Search for expenses"
            type="text"

            onChange={handleSearchChange}
          />

        </div>
        <Link to="./add-expense">
          <div className="add-button">
            <i className="fi-rr-add"></i>
            <label>Add</label>
          </div>
        </Link>
      </div>) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i className="fi-br-angle-left"></i>
              <label> Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <i className=" fi-rr-cross-circle"></i>
              <label>Cancel</label>
            </div>
          </Link>

        </div>
      )}

    </div>
  )
}

export default TopFold;
