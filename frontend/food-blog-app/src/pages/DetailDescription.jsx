import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaClock, FaArrowLeft } from "react-icons/fa";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/recipe/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="recipe-detail-loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="recipe-detail-error">
        <h2>Recipe not found</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="recipe-detail-container">
      <div className="recipe-detail-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Back to Recipes
        </button>
      </div>
      
      <div className="recipe-detail-content">
        <div className="recipe-image-section">
          <img 
            src={`http://localhost:5000/images/${recipe.coverImage}`} 
            alt={recipe.title}
            className="recipe-main-image"
          />
        </div>
        
        <div className="recipe-info-section">
          <h1 className="recipe-title">{recipe.title}</h1>
          
          <div className="recipe-time">
            <FaClock className="time-icon" />
            <span className="time-text">{recipe.time} minutes</span>
          </div>
          
          <div className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="recipe-instructions">
            <h2>Instructions</h2>
            <div className="instructions-content">
              {recipe.instructions.split('\n').map((paragraph, index) => (
                <p key={index} className="instruction-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
