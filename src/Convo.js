import { Avatar } from "@mui/material";
import React from "react";
import "./Convo.css";
import { Link } from "react-router-dom";

function Convo({ name, message, timestamp, profilePic }) {
  return (
    <Link
      to={`/chat/${name}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="Convo">
        <Avatar alt={name} src={profilePic} />
        <div className="Convo__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="Convo__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Convo;
