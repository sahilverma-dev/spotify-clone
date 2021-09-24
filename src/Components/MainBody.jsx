import React from "react";

// importing styles
import "../Styles/MainBody.css";

// import componenets
import Navbar from "./Navbar";

// importing react router dom
import { Route, Switch } from "react-router-dom";

// importing pages
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Library from "../Pages/Library";
import Favourite from "../Pages/Favourite";
import SinlgePlaylist from "../Pages/SinlgePlaylist";

const MainBody = () => {
  return (
    <div className="main-body">
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/library" exact component={Favourite} />
          <Route path="/favourite" exact component={Favourite} />
          <Route path="/playlist/:id" exact component={SinlgePlaylist} />
        </Switch>
      </div>
    </div>
  );
};

export default MainBody;
