import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropdown";
import RecipeCard from "../components/RecipeCard";
import recipesData from "../data/recipes";
import styles from "../styles/RecipesPage.module.css";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ attributes: [], mealType: [], dishType: [] });
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    setRecipes(recipesData);
    setFilteredRecipes(recipesData);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterAndSortRecipes(query, filters, sortOrder);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    filterAndSortRecipes(searchQuery, newFilters, sortOrder);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    filterAndSortRecipes(searchQuery, filters, order);
  };

  const filterAndSortRecipes = (query, filterObj, order) => {
    let updatedRecipes = [...recipes];

    if (query) {
      updatedRecipes = updatedRecipes.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase()) ||
          recipe.chef.toLowerCase().includes(query.toLowerCase()) ||
          recipe.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filterObj.attributes.length > 0) {
      updatedRecipes = updatedRecipes.filter((recipe) =>
        filterObj.attributes.some((attr) => recipe[attr] === true)
      );
    }
    
    if (filterObj.mealType.length > 0) {
      updatedRecipes = updatedRecipes.filter((recipe) =>
        filterObj.mealType.includes(recipe.mealType)
      );
    }
    
    if (filterObj.dishType.length > 0) {
      updatedRecipes = updatedRecipes.filter((recipe) =>
        filterObj.dishType.includes(recipe.dishType)
      );
    }
    
    if (order === "newest") {
      updatedRecipes.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
    } else if (order === "oldest") {
      updatedRecipes.sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
    } else if (order === "highest") {
      updatedRecipes.sort((a, b) => b.avgRating - a.avgRating);
    } else if (order === "lowest") {
      updatedRecipes.sort((a, b) => a.avgRating - b.avgRating);
    }

    setFilteredRecipes(updatedRecipes);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.content}>
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className={styles.recipesContainer}>
          <SortDropdown onSortChange={handleSortChange} />
          <div className={styles.recipesGrid}>
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.name} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
