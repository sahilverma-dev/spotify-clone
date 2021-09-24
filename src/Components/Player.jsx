import React from "react";

// importing styles
import "../Styles/Player.css";

// importing components
import Sidebar from "./Sidebar";
import MainBody from "./MainBody";
import Footer from "./Footer";

const Player = () => {
  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <MainBody />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Player;
