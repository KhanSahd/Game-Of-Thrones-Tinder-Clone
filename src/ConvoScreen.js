import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./ConvoScreen.css";

function ConvoScreen() {
  const [input, setInput] = useState([]);
  const [messages, setMessages] = useState([
    {
      name: "Joffey Baratheon",
      src: "https://cdn.vox-cdn.com/thumbor/ZrgZmrrlXBA_Lv2IgWRQHhpS33Q=/0x0:625x469/1400x1050/filters:focal(0x0:625x469):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/32470087/Joffrey_in_armor2x09.0.jpg",
      message: "I am the lord of the seven kingdoms",
    },
    {
      message: "Didn't last very long",
    },
    {
      name: "Joffey Baratheon",
      src: "https://cdn.vox-cdn.com/thumbor/ZrgZmrrlXBA_Lv2IgWRQHhpS33Q=/0x0:625x469/1400x1050/filters:focal(0x0:625x469):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/32470087/Joffrey_in_armor2x09.0.jpg",
      message: "I miss you",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="ConvoScreen">
      <p className="ConvoScreen__match">
        You matched with Joffrey Baratheon in 300AC
      </p>
      {messages.map((message) => {
        return message.name ? (
          <div className="ConvoScreen__message">
            <Avatar alt={message.name} src={message.src} />
            <p className="ConvoScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="ConvoScreen__message">
            <p className="convoScreen__userText">{message.message}</p>
          </div>
        );
      })}
      <form className="ConvoScreen__input">
        <input
          type="text"
          placeholder="type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          onClick={handleSend}
          className="ConvoScreen__button"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ConvoScreen;
