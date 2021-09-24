import React from "react";

function GenreCard({ image, background, title }) {
  return (
    <div className="genre-card" style={{ background: background }}>
      <h3>{title}</h3>
      {image != null && <img src={image} alt="card-thumb" />}
      {image === null && <div className="fallback-image"></div>}
    </div>
  );
}

export default GenreCard;
