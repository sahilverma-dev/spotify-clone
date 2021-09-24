import React, { useState } from "react";

// importing react router dom
import { NavLink, Link } from "react-router-dom";

// importing styles
import "../Styles/Sidebar.css";

// importing logo
import Logo1 from "../Images/spotify-logo.png";
import Logo2 from "../Images/spotify-circle.png";

// importing SideBarOption
import SideBarOption from "./SideBarOption";

// importing context
import { useDataLayerValue } from "../Contexts/DataLayer";

// importing icons
import HomeIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import ExpandIcon from "@material-ui/icons/ChevronRightRounded";
import AddIcon from "@material-ui/icons/Add";
import FavouriteIcon from "@material-ui/icons/Favorite";

const Sidebar = () => {
  const [{ playlist }] = useDataLayerValue();
  const [expand, setExpand] = useState(false);
  return (
    <div className={`sidebar ${expand ? "expand" : ""}`}>
      <div className="sidebar-logo">
        <Link to="/">
          {expand ? (
            <img src={Logo1} alt="sidebar logo" className="sidebar-big-logo" />
          ) : (
            <img
              src={Logo2}
              alt="sidebar logo"
              className="sidebar-circle-logo"
            />
          )}
        </Link>
      </div>

      <div className="sidebar-options">
        <NavLink
          className="sibebar-link"
          to="/"
          exact
          activeClassName="active"
          onClick={(e) => {
            if (expand) setExpand(!expand);
          }}
        >
          <SideBarOption title="Home" Icon={HomeIcon} />
        </NavLink>
        <NavLink
          className="sibebar-link"
          to="/search"
          exact
          activeClassName="active"
          onClick={(e) => {
            if (expand) setExpand(!expand);
          }}
        >
          <SideBarOption title="Search" Icon={SearchIcon} />
        </NavLink>
        <NavLink
          className="sibebar-link"
          to="/library"
          exact
          activeClassName="active"
          onClick={(e) => {
            if (expand) setExpand(!expand);
          }}
        >
          <SideBarOption title="Library" Icon={LibraryMusicIcon} />
        </NavLink>
      </div>

      <div className="personal-lists">
        <div
          className="create-playlist"
          onClick={(e) => {
            if (expand) setExpand(!expand);
          }}
        >
          <AddIcon className="create-playlist-icon" />
          <p>Create Playlist</p>
        </div>
        <div
          className="fav-list"
          onClick={(e) => {
            if (expand) setExpand(!expand);
          }}
        >
          <Link to="/favourite">
            <FavouriteIcon className="fav-list-icon" />
            <p>Liked Songs</p>
          </Link>
        </div>
      </div>
      <div className="sidebar-playlist">
        {playlist?.items?.map((item) => {
          return (
            <Link
              to={`/playlist/${item.id}`}
              key={item.id}
              onClick={(e) => {
                if (expand) setExpand(!expand);
              }}
            >
              <div className="playlist-item">
                <img
                  src={item.images[0].url}
                  className="playlist-poster"
                  alt={item.name}
                />
                <p className="name">{item.name.substr(0, 25)}..</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="expand-btn" onClick={(e) => setExpand(!expand)}>
        <ExpandIcon className="expand-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
