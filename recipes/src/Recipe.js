import style from "./recipe.module.css";

const Recipe = ({ title, image, calories }) => {
  return (
    <div className={style.recipe}>
      <h3>{title}</h3>
      <p>Calories: {calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
