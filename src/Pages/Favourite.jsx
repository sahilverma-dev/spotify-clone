import React from "react";

// importing context
import { useDataLayerValue } from "../Contexts/DataLayer";

// importing styles
import "../Styles/Favourite.css";

// importing icons
import PlayIcon from "@material-ui/icons/PlayCircleFilledRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DownloadIcon from "@material-ui/icons/GetApp";
import Dots from "@material-ui/icons/MoreHoriz";

const Favourite = () => {
  const [{ user, songs }] = useDataLayerValue();
  return (
    <div className="favourite">
      <div className="favourite-header">
        <div className="header-left">
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
            alt=""
          />
        </div>
        <div className="header-right">
          <h3>Playlist</h3>
          <h1>Liked Songs</h1>
          {user !== null ? (
            <div className="fav-user">
              <img src={user?.images[0].url} alt={user?.display_name} />
              <span className="name">{user?.display_name}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="fav-list">
        <div className="btn-container">
          <div className="play-icon">
            <PlayIcon />
          </div>
          <div className="favourite-i">
            <FavoriteIcon />
          </div>
          <div className="download-icon">
            <DownloadIcon />
          </div>
          <div className="dots">
            <Dots />
          </div>
        </div>
        <div className="list">
          {songs?.items.map((song) => {
            return (
              <div className="list-item" key={song.id}>
                <div className="poster">
                  <img src={song?.album?.images[2].url} alt={song?.name} />
                </div>
                <div className="name">{song?.name}</div>
                <div className="added">2 days ago</div>
                <div className="duration">3:07</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
