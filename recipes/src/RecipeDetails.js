const RecipeDetails = (recipes, routeProps) => {
  let extractIdFromImgUrl = (url) => {
    if (url) {
      let imgName = url.split("/").pop();
      return imgName.split(".")[0];
    }
  };
  const foundMatch = recipes.recipes.find(
    (recipe) =>
      extractIdFromImgUrl(recipe.recipe.image) ===
      recipes.routeProps.match.params.label
  );
  if (foundMatch) {
    return (
      <div>
        <h3>{foundMatch.recipe.label}</h3>
        <img src={foundMatch.recipe.image} />
        <p>Calories: {foundMatch.recipe.calories}</p>
        <ul>
          {foundMatch.recipe.ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>Not Found</p>
      </div>
    );
  }
};

export default RecipeDetails;
