import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import { useState, useEffect } from "react";

function App() {
  const API_KEY = "f829db42";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    //making the API call
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
    );
    // converting the response to js object
    const data = await response.json();
    //Updating the state to that object
    setMovie(data);
  };

  const randomMovie = () => {
    const movies = [
      "Swiss Army Man",
      "Her",
      "The Lobster",
      "Everything Everywhere All At Once",
      "I Heart Huckabees",
    ];
    return movies[Math.floor(Math.random() * movies.length)];
  };

  console.log(movie);

  //The function will run once when the component loads ONLY
  //WILL only repeat if any value in the array changes

  useEffect(() => {
    getMovie(randomMovie());
  }, []);

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;