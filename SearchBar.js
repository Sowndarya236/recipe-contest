import React, { useState } from "react";
import "../styles/SearchBar.css"; 


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes by name, chef, or description..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
