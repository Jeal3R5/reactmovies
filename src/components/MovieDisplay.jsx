// destructure the movie prop
const MovieDisplay = ({ movie }) => {
    if (movie) {
      // destructuring properties of movie
      const { Title, Poster, Writer } = movie;
      return (
        <div>
          <h1>{Title}</h1>
          <img src={Poster} alt={Title} />
          <h3>{Writer}</h3>
        </div>
      );
    } else {
      return <h1>Search for a Movie</h1>;
    }
  };
  
  export default MovieDisplay;