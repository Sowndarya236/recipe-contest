
import React from "react";
import "../styles/RecipeCard.css"; 

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img className="recipe-image" src={recipe.imgUrl} alt={recipe.name} loading="lazy" />
      <div className="recipe-details">
        <h3>{recipe.name}</h3>
        <p>By {recipe.chef}</p>
        <p>Rating: ⭐ {recipe.avgRating} ({recipe.totalRatings} reviews)</p>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
