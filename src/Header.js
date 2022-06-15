import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import "./Header.css";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Header({ backbutton, forwardbutton }) {
  return (
    <div className="header">
      {backbutton ? (
        <Link to={backbutton} style={{ color: "black" }}>
          <ArrowBackIosNewIcon className="header__icon" fontSize="large" />
        </Link>
      ) : (
        <Link to="/profile" style={{ color: "black" }}>
          <PersonIcon className="header__icon" fontSize="large" />
        </Link>
      )}
      <Link to="/" style={{ color: "black" }}>
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
          alt="Tinder Logo"
        />
      </Link>
      {forwardbutton ? (
        <Link to={forwardbutton} style={{ color: "inherit" }}>
          <ArrowForwardIosIcon className="header__icon" fontSize="large" />
        </Link>
      ) : (
        <Link to="/chat" style={{ color: "black" }}>
          <ForumIcon className="header__icon" fontSize="large" />
        </Link>
      )}
    </div>
  );
}

export default Header;
