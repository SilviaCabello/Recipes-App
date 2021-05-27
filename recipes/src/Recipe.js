import style from "./recipe.module.css";

const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="" />
      <h3>{title}</h3>
      {/* <p>Calories: {calories}</p> */}
    </div>
  );
};

export default Recipe;
