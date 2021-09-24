import React, { useState } from "react";

import { useParams } from "react-router-dom";

import Skeleton from "react-loading-skeleton";

// importing icons
import PlayIcon from "@material-ui/icons/PlayCircleFilledRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DownloadIcon from "@material-ui/icons/GetApp";
import Dots from "@material-ui/icons/MoreHoriz";

// importing context
import { useDataLayerValue } from "../Contexts/DataLayer";

const SinlgePlaylist = () => {
  const { id } = useParams();
  const [songs, setSongs] = useState(null);
  const [{ token }] = useDataLayerValue();

  // storeing recent playlist data
  fetch(`https://api.spotify.com/v1/playlists/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setSongs(data);
    })
    .catch((err) => console.log(err));
  return (
    <div className="favourite">
      <div className="favourite-header">
        <div className="header-left">
          <img src={songs?.images[0]?.url} alt="" />
        </div>
        <div className="header-right">
          <h3>Playlist</h3>
          <h1>{songs?.name}</h1>
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
          {songs?.tracks?.items.map((song) => {
            return (
              <div className="list-item" key={song?.track?.id}>
                <div className="poster">
                  {/* {songs !== null ? (
                      ) : (
                          <Skeleton />
                          )} */}
                  <img
                    src={song?.track?.album?.images[2]?.url}
                    alt={song?.track?.name}
                  />
                </div>
                <div className="name">{song?.track?.name}</div>
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

export default SinlgePlaylist;
