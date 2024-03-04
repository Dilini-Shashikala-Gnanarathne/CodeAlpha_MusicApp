import React, { useState } from 'react';
import { searchIconGrey } from "../../assets";
import "./style.css";

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-input-container flex">
      <img
        src={searchIconGrey}
        alt="Search Icon"
        className="search-icon"
        onClick={handleSearch}
      />
      <input
        placeholder="Search Song"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
