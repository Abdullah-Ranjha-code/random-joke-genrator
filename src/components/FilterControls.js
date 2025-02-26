import React from "react";

function FilterControls({ currentJoke, setCurrentJoke, favorites, setFavorites }) {
  // Function to fetch a new joke
  const fetchNewJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    setCurrentJoke(data.joke); // Update the state with the new joke
  };

  // Function to save the current joke to favorites
  const saveToFavorites = () => {
    if (currentJoke && !favorites.includes(currentJoke)) {
      setFavorites([...favorites, currentJoke]); // Add the joke to favorites
    }
  };

  return (
    <div className="filter-controls">
      {/* Button to fetch a new joke */}
      <button onClick={fetchNewJoke}>Get New Joke</button>
      
      {/* Button to save the current joke */}
      <button onClick={saveToFavorites} disabled={!currentJoke}>
        Save to Favorites
      </button>
    </div>
  );
}

export default FilterControls;
