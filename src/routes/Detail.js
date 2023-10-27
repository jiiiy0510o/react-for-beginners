import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div style={{ position: "relative" }}>
          <img src={movie.background_image} alt={movie.title} style={{ width: "400px" }} />

          <h2> {movie.title_long}</h2>
          <h3 style={{ position: "absolute", top: 0, left: 0, fontSize: "24px" }}>{movie.rating}</h3>
          <p> {movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
