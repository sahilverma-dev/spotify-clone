import React, { useState } from "react";

// importing styles
import "../Styles/Footer.css";

// importing icons
import ShuffleOnIcon from "@material-ui/icons/ShuffleOutlined";
import PreviousIcon from "@material-ui/icons/SkipPreviousRounded";
import PlayIcon from "@material-ui/icons/PlayCircleOutline";
import PauseIcon from "@material-ui/icons/PauseCircleOutline";
import NextIcon from "@material-ui/icons/SkipNextRounded";
import LoopIcon from "@material-ui/icons/Repeat";
import VolumeIcon from "@material-ui/icons/VolumeDown";

// importing slider
import { Slider } from "@material-ui/core";

// importing context
import { useDataLayerValue } from "../Contexts/DataLayer";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [{ currentTrack }] = useDataLayerValue();
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="music-info">
          <div className="music-poster">
            <img
              src={currentTrack?.album?.images[2].url}
              alt={currentTrack?.name}
            />
          </div>
          <div className="music-details">
            <h2 className="muisc-name">{currentTrack?.name}</h2>
            <p className="artist-name">{currentTrack?.artists?.[0].name}</p>
          </div>
        </div>
      </div>
      <div className="footer-center">
        <div className="music-player">
          <div className="shuffle-btn player-btn">
            <ShuffleOnIcon />
          </div>
          <div className="previous-btn player-btn">
            <PreviousIcon />
          </div>
          <div
            className="play-pause-btn player-btn"
            onClick={(e) => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </div>
          <div className="next-btn player-btn">
            <NextIcon />
          </div>
          <div className="loop-btn player-btn">
            <LoopIcon />
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="volume-control">
          <div className="volume-icon">
            <VolumeIcon />
          </div>
          <div className="slider">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
