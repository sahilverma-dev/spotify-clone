import React from "react";

//
import Logo from "../Images/spotify-logo.png";

// importing login url
import { loginUrl } from "../spotify";

const Login = () => {
  return (
    <div className="login">
      <img src={Logo} alt="" className="logo" />
      <a href={loginUrl} className="login-btn">
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;
