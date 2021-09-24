import React from "react";

import { Link } from "react-router-dom";

const list = [
  {
    id: 1,
    img: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
    title: "Liked Songs",
    route: "/favourite/",
  },
  {
    id: 2,
    img: "https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png",
    title: "Your Weekly Discover",
    route: "/library/",
  },
  {
    id: 3,
    img: "https://i.scdn.co/image/ab67616d00001e0268b656c1fbe1ea74ed15565f",
    title: "BlackSheep",
    route: "/",
  },
  {
    id: 4,
    img: "https://i.scdn.co/image/ab67616100005174a17a15a5927c64f67d11a6bb",
    title: "Raftaar Mix",
    route: "/",
  },
];

const RecommededSongs = () => {
  return (
    <div className="recommeded-songs">
      {list?.map((item) => {
        return (
          <Link to={item.route} key={item.id}>
            <div className="recommeded-song">
              <div className="poster">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="song-name">{item.title}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecommededSongs;
