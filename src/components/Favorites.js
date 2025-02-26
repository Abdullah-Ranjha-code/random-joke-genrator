import React from "react";

function Favorites({ favorites, setFavorites }) {
  // Function to remove a joke from the favorites list
  const removeFavorite = (joke) => {
    const updatedFavorites = favorites.filter((fav) => fav !== joke);
    setFavorites(updatedFavorites); // Update state with the new list
  };

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      {/* Show a message if no favorite jokes are saved */}
      {favorites.length === 0 ? (
        <p>No favorite jokes yet.</p>
      ) : (
        <ul>
          {favorites.map((joke, index) => (
            <li key={index}>
              {joke}
              {/* Button to remove a favorite joke */}
              <button onClick={() => removeFavorite(joke)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
