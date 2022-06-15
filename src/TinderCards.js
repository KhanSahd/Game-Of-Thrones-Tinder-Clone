import React, { useEffect, useState } from "react";
import database from "./firebase";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { collection, doc, getDocs } from "firebase/firestore";

function TinderCards() {
  // useState is basically like declaring an array in REACT.
  const [people, setPeople] = useState([]);

  // Use Effect is basically a if statement for React. It runs a piece of code based on a condition
  useEffect(() => {
    const colRef = collection(database, "people");
    getDocs(colRef).then((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
  }, [people]);

  // BAD
  // const people = [];
  // people.push("Sahd", "Kobe");

  // GOOD
  // setPeople([...people, "Sahd", "Kobe"]);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
