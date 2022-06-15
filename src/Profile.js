import React from "react";
import { Avatar, IconButton } from "@mui/material";
import "./Profile.css";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShieldIcon from "@mui/icons-material/Shield";

function Profile() {
  return (
    <div className="profile">
      <Avatar
        className="profile__avatar"
        src="https://fansided.com/files/2019/02/iron-throne.jpg"
      />
      <div className="profile__info">
        <h2 className="profile__name">The Throne</h2>
        <CheckCircleIcon fontSize="small" style={{ color: "#4361EE" }} />
      </div>
      <div className="profile__buttons">
        <IconButton>
          <SettingsIcon fontSize="large" className="profile__icon" />
        </IconButton>
        <IconButton>
          <CreateIcon fontSize="large" className="profile__icon" />
        </IconButton>
        <IconButton>
          <ShieldIcon fontSize="large" className="profile__icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Profile;
