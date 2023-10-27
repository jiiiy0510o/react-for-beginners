import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, year, genres }) {
  return (
    <li style={{ listStyle: "none", padding: "12px 0", borderTop: "1px solid #666" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <img src={coverImg} alt={title} />
        <div>
          <h2>
            <Link to={`/movie/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
              ({year}) {title}
            </Link>
          </h2>
          <h6>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </h6>
          {summary.length < 200 ? <p>{summary}</p> : <p>{summary.split("").slice(0, 160).join("")}...</p>}
        </div>
      </div>
    </li>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired,
};

export default Movie;
