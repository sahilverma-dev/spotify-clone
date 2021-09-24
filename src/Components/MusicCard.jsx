import React from "react";

import PlayIcon from "@material-ui/icons/PlayCircleFilledRounded";

const MusicCard = ({ item }) => {
  return (
    <div>
      <div className="music-card">
        <div className="card-image">
          <img src={item.track.album.images[1].url} alt={item.track.name} />
          <div className="play-icon">
            <PlayIcon />
          </div>
        </div>
        <div className="music-info">
          <a href="#" className="song-name">
            {item.track.name}
          </a>
          <p className="artists-name">
            <a href="#">{item.track.artists[0].name}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
