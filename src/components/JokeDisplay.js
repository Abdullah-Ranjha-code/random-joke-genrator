// Importing React and useEffect for data fetching
import React, { useEffect } from "react";

function JokeDisplay({ currentJoke, setCurrentJoke }) {
  // Fetch a new joke when the component mounts
  useEffect(() => {//yeh useeffect iss lye hy taake jb phli dafa website chle tou phla joke display ho.
    fetchNewJoke();
  }, []);//yeh sirf ek baaar chle ga.

  // Function to fetch a joke from the API
  const fetchNewJoke = async () => {//yeh method web se api k through koi random joke fetch kr k laae ga or currentjoke ki prop me uss ko update kre ga.
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }, 
    });
    const data = await response.json(); 
    setCurrentJoke(data.joke); // Update the state with the new joke
  };

  return (
    <div className="joke-display">
      <h2>Here's a Joke:</h2>
      {/* Display the current joke */}
      <p>{currentJoke || "Fetching a joke..."}</p>
    </div>
  );
}

export default JokeDisplay;
