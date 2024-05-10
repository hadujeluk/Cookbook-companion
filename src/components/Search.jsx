import React, { useState } from 'react';
import SortBar from './SortBar';
import Addrecipe from './Addrecipe';

const Search = ({ recipes, setSearchInput, handleSortByDifficulty }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setSearchInput(term);
  };

  return (
    <div className="spacing">
      <div><Addrecipe /></div>
      
       
      <div className="search-bar">
        
        <div>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearch}
        />
        </div>
      </div>
      <div><SortBar recipes={recipes} handleSortByDifficulty={handleSortByDifficulty} /></div>
    </div>
  );
};

export default Search;