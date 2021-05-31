import style from "./recipe.module.css";

const Recipe = ({ title, image, dishType }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="" />
      <h2 className="dishType">{dishType}</h2>
      <h3 className="title-recipe-list">{title}</h3>
      
      {/* <p>Calories: {calories}</p> */}
    </div>
  );
};

export default Recipe;
