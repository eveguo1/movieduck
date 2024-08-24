import React from "react";
import "../styles.css";

export default function MovieCard({ m }) {
  return (
    <div key={m.id} className="movie-card">
      <img src={`images/${m.image}`} alt={m.title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{m.title}</h3>
        <p className="movie-card-genre">{m.genre}</p>
        <p className="movie-card-rating">{m.rating}</p>
      </div>
    </div>
  );
}
