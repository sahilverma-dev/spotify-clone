import React, { useState, useEffect } from "react";

// importing components
import RecommededSongs from "../Components/RecommededSongs";
import MusicSlider from "../Components/MusicSlider";
import ArtistSlider from "../Components/ArtistSlider";

// importing context
import { useDataLayerValue } from "../Contexts/DataLayer";

const Home = () => {
  const [{ recentlyPlayed, artists }] = useDataLayerValue();

  const time = new Date();
  const [msg, setMsg] = useState("");
  useEffect(() => {
    if (time.getHours() > 1 && time.getHours() < 12) setMsg("Good Morning");
    if (time.getHours() > 12 && time.getHours() < 17) setMsg("Good Afternoon");
    if (time.getHours() > 17) setMsg("Good Evening");
  }, [time]);

  return (
    <div className="home">
      <h2 className="msg">{msg}</h2>
      <div className="music-section"></div>
      <RecommededSongs />
      <MusicSlider title="Recently Played" data={recentlyPlayed} />
      <ArtistSlider title="Your Top Artist" data={artists} />
    </div>
  );
};

export default Home;
