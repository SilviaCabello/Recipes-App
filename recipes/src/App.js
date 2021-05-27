import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

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
  const extractIdFromImgUrl = (url) => {
    if(url){
    let imgName = url.split('/').pop();
    return imgName.split('.')[0];
  }
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <img className="logo-home" src="https://i.imgur.com/bSHIrgH.png" alt="" />
            <img className="banner-home" src="https://i.imgur.com/UpDD9aR.jpg" alt="" />
            <h1 className="question-title">WHAT DO YOU WANNA EAT TODAY?</h1>
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
                <Link className="Link-details" to={`/recipes/${extractIdFromImgUrl(recipe.recipe.image)}`}>
                  <Recipe
                    key={recipe.recipe.index}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                  />
                </Link>
              ))}
            </div>
          </Route>
          <Route
            path="/recipes/:label"
            render={(routeProps) => (
              <RecipeDetails routeProps={routeProps} recipes={recipes} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
