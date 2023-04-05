import React from "react";
import ReminderCardItem from "./ReminderCardItem";
import "./reminderCards.css";

const ReminderCards = (props) => {
  return (
    <div className="cards">
      <div className="cardsContainer">
        <div className="cardsWrapper">
          {props.data.map((item, key) => (
            <ReminderCardItem item={item} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReminderCards;
