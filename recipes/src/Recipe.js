const Recipe = ({ title, image, calories }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Calories: {calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
