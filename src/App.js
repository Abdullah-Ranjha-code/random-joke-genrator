// Importing required libraries and components
import React, { useState } from "react"; 
import JokeDisplay from "./components/JokeDisplay"; // Joke fetching and display component
import Favorites from "./components/Favorites"; // Favorite jokes list
import FilterControls from "./components/FilterControls";
import "./components/styles.css"; // CSS file for styling

function App() {
  // State to store the current joke
  const [currentJoke, setCurrentJoke] = useState("");

  // State to manage favorite jokes
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="app-container">
      {/* Header of the app */}
      <h1 className="title">Random Joke Generator</h1>
      
      {/* Joke display component to fetch and display jokes */}
      <JokeDisplay currentJoke={currentJoke} setCurrentJoke={setCurrentJoke} />

      {/* Favorites component to show saved jokes */}
      <Favorites favorites={favorites} setFavorites={setFavorites} />

      {/* Filter controls to fetch a new joke or save the current one */}
      <FilterControls
        currentJoke={currentJoke}
        setCurrentJoke={setCurrentJoke}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}

export default App;
