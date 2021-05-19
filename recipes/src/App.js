import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "d6c939d9";
  const APP_KEY = "b52ecc7bf4d89f472291cd4518360a3a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("fruit");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <h3 className="question-title">What do you wanna eat today?</h3>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="What's on your fridge?"
        />
        <button className="search-button" type="submit">
          Search Recipes
        </button>
      </form>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
