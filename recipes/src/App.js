import React from "react";
import './App.css';

function App() {
  const APP_ID = "d6c939d9";
  const APP_KEY = "b52ecc7bf4d89f472291cd4518360a3a";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
