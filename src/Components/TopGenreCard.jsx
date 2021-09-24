import React from "react";

function TopGenreCard({ title, image, background }) {
  return (
    <div className="top-genre-card-wrapper" style={{ background: background }}>
      <h3>{title}</h3>

      <img src={image} alt="genre--thumb" />
    </div>
  );
}

export default TopGenreCard;
