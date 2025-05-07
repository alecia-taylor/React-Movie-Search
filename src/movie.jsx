// MovieDisplay.js
const MovieDisplay = ({ movie }) => {
    if (!movie) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>{movie.Title}</h1>
        {/* other movie details */}
      </div>
    );
  };
  
  export default MovieDisplay;
  