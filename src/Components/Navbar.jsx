import React, { useState } from "react";

// importing style
import "../Styles/Navbar.css";

// importing icons
import PreviousIcon from "@material-ui/icons/ChevronLeftRounded";
import NextIcon from "@material-ui/icons/ChevronRightRounded";
import DropDownIcon from "@material-ui/icons/ArrowDropDown";
import OpenInNewTabIcon from "@material-ui/icons/OpenInNewRounded";

// importing context
import { useDataLayerValue } from "../Contexts/DataLayer";

// importing react router dom
import { useHistory } from "react-router-dom";

// importing SearchBar
import SearchBar from "./SearchBar";

const DropDownMenu = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="account-dropdown">
      <a
        href={`#`}
        className="account-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Account <OpenInNewTabIcon />
      </a>
      <a href={`#`} target="_blank" rel="noopener noreferrer">
        Profile
      </a>
      <a href="/settings">Settings</a>
      <hr />
      <a
        href="#"
        onClick={(e) => {
          dispatch({
            type: "SET_TOKEN",
            token: null,
          });
        }}
      >
        Log out
      </a>
    </div>
  );
};

const Navbar = () => {
  const history = useHistory();
  const goBack = () => history.goBack();
  const goForward = () => history.goForward();
  const [{ user }] = useDataLayerValue();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="nav-buttons">
          <button
            onClick={(e) => history.location.pathname !== "/" && goBack}
            className={
              history.location.pathname === "/" ||
              history.location.pathname === ""
                ? "inactive"
                : ""
            }
          >
            <PreviousIcon />
          </button>
          <button onClick={(e) => goForward}>
            <NextIcon />
          </button>
        </div>
      </div>
      <SearchBar />
      <div className="navbar-right">
        {user !== null ? (
          <div className="navbar-user" onClick={(e) => setIsOpen(!isOpen)}>
            <div className="avatar">
              <img
                src={user.images[0].url}
                className="avatar-img"
                alt={user.displayName}
              />
            </div>
            <span className="username">{user.display_name}</span>
            <div className={`dropdown-icon ${isOpen ? "active" : ""}`}>
              <DropDownIcon />
            </div>
          </div>
        ) : (
          ""
        )}

        {isOpen ? <DropDownMenu /> : ""}
      </div>
    </div>
  );
};

export default Navbar;
