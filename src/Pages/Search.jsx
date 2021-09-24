import React from "react";

// import genres
import genres from "../genre";

// importing components
import TopGenreCard from "../Components/TopGenreCard";
import GenreCard from "../Components/GenreCard";

// importing style
import "../Styles/Search.css";

// top genres
const top_genres = [
  {
    id: 1,
    title: "Pop",
    background: "rgb(195, 240, 200)",
    image: "https://t.scdn.co/images/d355f48a90b64c25b6e004179a596e51.jpeg",
  },
  {
    id: 2,
    title: "Hip Hop",
    background: "rgb(245, 155, 35)",
    image: "https://t.scdn.co/images/9676cef74ec147a48607c737c4f93943.jpeg",
  },
  {
    id: 3,
    title: "Bollywood",
    background: "rgb(255, 70, 50)",
    image: "https://t.scdn.co/images/29d2df7525b64ed49889c93d06c9e83b.jpeg",
  },
  {
    id: 4,
    title: "Indie",
    background: "rgb(65, 0, 245)",
    image: "https://t.scdn.co/images/4100c80f8efb45a38eb26b42aef401fa.jpeg",
  },
];

const Search = () => {
  return (
    <div className="search-screen">
      <div className="search-screen-container">
        <div className="search-sections">
          <div className="top-genres">
            <div className="section-header">
              <h3>Your top genres</h3>
            </div>
            <div className="top-genres-wrapper">
              {top_genres?.map((genre, index) => (
                <TopGenreCard
                  title={genre.title}
                  image={genre.image}
                  background={genre.background}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="top-genres">
            <div className="section-header">
              <h3>Browse all</h3>
            </div>
            <div className="genres-wrapper">
              {genres?.map((genre, index) => (
                <GenreCard
                  image={genre.image}
                  background={genre.background}
                  title={genre.title}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
