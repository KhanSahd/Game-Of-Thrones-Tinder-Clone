import React from "react";
import Convo from "./Convo";

function Chat() {
  return (
    <div className="chat">
      <Convo
        name="Joffrey Baratheon"
        message="I miss you"
        timestamp="2 mins ago"
        profilePic="https://cdn.vox-cdn.com/thumbor/ZrgZmrrlXBA_Lv2IgWRQHhpS33Q=/0x0:625x469/1400x1050/filters:focal(0x0:625x469):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/32470087/Joffrey_in_armor2x09.0.jpg"
      />
      <Convo
        name="Theon Greyjoy"
        message="I've been through so much"
        timestamp="8 mins ago"
        profilePic="https://static.tvtropes.org/pmwiki/pub/images/theon_greyjoy_s7.png"
      />
      <Convo
        name="Stannis Baratheon"
        message="You are mine by right"
        timestamp="12 mins ago"
        profilePic="https://d.newsweek.com/en/full/437810/stannis-baratheon-game-thrones.jpg?w=1600&h=1600&q=88&f=1e33c5b6c3b48fa82e6532b3146a2d90"
      />
      <Convo
        name="Cercei Lanister"
        message="I always pay my debts"
        timestamp="12 mins ago"
        profilePic="https://i.pinimg.com/originals/a1/a0/cf/a1a0cffc6e4cb3d9a85048c4be84eb58.jpg"
      />
    </div>
  );
}

export default Chat;
