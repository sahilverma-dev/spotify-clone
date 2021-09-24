import React, { useState, useEffect } from "react";

// importing react router dom
import { BrowserRouter as Router } from "react-router-dom";

// importing conponenets
import Login from "./Login";
import Player from "./Player";
import NotSupported from "./NotSupported";

// importin styles
import "../Styles/App.css";

// importing context
import { useDataLayerValue } from "../Contexts/DataLayer";

// importing spotify
import { getTokenFromResponse } from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ token, supported }, dispatch] = useDataLayerValue();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = (e) => {
      setScreenWidth(window.innerWidth);
    };
    screenWidth > 800
      ? dispatch({
          type: "SET_SUPPORT",
          supported: true,
        })
      : dispatch({
          type: "SET_SUPPORT",
          supported: false,
        });
  }, [screenWidth]);

  useEffect(() => {
    const hash = getTokenFromResponse();
    // add your token ( see consle ) here for debugging
    // const _token = "";
    const _token = hash.access_token;
    window.location.hash = "";
    // if token exists then store theme values in datalayer
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      // storing user data
      spotify
        .getMe()
        .then((user) => {
          dispatch({
            type: "SET_USER",
            user: user,
          });
        })
        .catch((err) => console.log(err));
      // storing playlist data
      spotify
        .getUserPlaylists()
        .then((playlist) => {
          dispatch({
            type: "SET_PLAYLIST",
            playlist: playlist,
          });
        })
        .catch((err) => console.log(err));
      // storeing recent playlist data
      fetch("https://api.spotify.com/v1/me/player/recently-played", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + _token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SET_RECENTLY_PLAYED",
            recentlyPlayed: data,
          });
        })
        .catch((err) => console.log(err));
      // storing user's top artist data
      fetch("https://api.spotify.com/v1/me/top/artists", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + _token,
        },
      })
        .then((res) => res.json())
        .then((artists) => {
          dispatch({
            type: "SET_ARTISTS",
            artists: artists,
          });
        })
        .catch((err) => console.log(err));
      // storing user's top tracks data
      fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + _token,
        },
      })
        .then((res) => res.json())
        .then((songs) => {
          dispatch({
            type: "SET_SONGS",
            songs: songs,
          });
        })
        .catch((err) => console.log(err));

      // storing current played song data
      fetch("https://api.spotify.com/v1/me/player/recently-played", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + _token,
        },
      })
        .then((res) => res.json())
        .then((currentTrack) => {
          dispatch({
            type: "SET_CURRENT_TRACK",
            currentTrack: currentTrack.items[0].track,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <Router>
      <div className="app">
        {supported ? token ? <Player /> : <Login /> : <NotSupported />}
      </div>
    </Router>
  );
};

export default App;
