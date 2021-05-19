import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "d6c939d9";
  const APP_KEY = "b52ecc7bf4d89f472291cd4518360a3a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, []);

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
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="App">
      <h3>What do you wanna eat today?</h3>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
