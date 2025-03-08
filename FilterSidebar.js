import React, { useState } from "react";
import "../styles/FilterSidebar.css"; 


const FilterSidebar = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    attributes: [],
    mealType: [],
    dishType: [],
  });

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
      } else {
        updatedFilters[category].push(value);
      }
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({ attributes: [], mealType: [], dishType: [] });
    onFilterChange({ attributes: [], mealType: [], dishType: [] });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filter Recipes</h3>

      {/* Attributes Filters */}
      <div className="filter-section">
        <h4>Attributes</h4>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("attributes", "contestWinner")}
            checked={selectedFilters.attributes.includes("contestWinner")}
          />
          Contest Winner
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("attributes", "featured")}
            checked={selectedFilters.attributes.includes("featured")}
          />
          Featured
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("attributes", "testKitchenApproved")}
            checked={selectedFilters.attributes.includes("testKitchenApproved")}
          />
          Test Kitchen-Approved
        </label>
      </div>

      {/* Meal Type Filters */}
      <div className="filter-section">
        <h4>Meal Type</h4>
        {["Dinner", "Lunch", "Dessert", "Breakfast"].map((meal) => (
          <label key={meal}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("mealType", meal)}
              checked={selectedFilters.mealType.includes(meal)}
            />
            {meal}
          </label>
        ))}
      </div>

      {/* Dish Type Filters */}
      <div className="filter-section">
        <h4>Dish Type</h4>
        {["Curry", "Pizza", "Seafood", "Soup", "Mexican", "Smoothie"].map((dish) => (
          <label key={dish}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("dishType", dish)}
              checked={selectedFilters.dishType.includes(dish)}
            />
            {dish}
          </label>
        ))}
      </div>

      <button className="clear-filters" onClick={clearFilters}>
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
