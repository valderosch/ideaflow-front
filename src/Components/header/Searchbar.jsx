import React from "react";
import {useState} from 'react';

// Searchbar Component
const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");
 
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

const Result = () => {
  const title = "How many hours you spend on react?";
  const author = "Goracio";
  return(
    <div className="result">
      <a href="#">
        <h3>"{title}"</h3>
        <p>Author: {author}</p>
      </a>
    </div>
  );
}

return( 
<div>
  <input
    type="search"
    placeholder="Search ideas"
    onChange={handleChange}
    value={searchInput}/>
  
    <div className="searchResults">
      <Result/><br/>
      <Result/><br/>
      <Result/><br/>
    </div>
</div>);
};

export default SearchBar;
