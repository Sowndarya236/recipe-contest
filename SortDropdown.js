import React from "react";
import "../styles/SortDropdown.css"; 

const SortDropdown = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="newest">Upload Date: Newest</option>
        <option value="oldest">Upload Date: Oldest</option>
        <option value="highest">Average Rating: Highest</option>
        <option value="lowest">Average Rating: Lowest</option>
      </select>
    </div>
  );
};

export default SortDropdown;
