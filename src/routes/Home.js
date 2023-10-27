import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movie</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              year={movie.year}
              genres={movie.genres}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
