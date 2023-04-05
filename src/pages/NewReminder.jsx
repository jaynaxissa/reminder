import { padding } from "@mui/system";
import React from "react";
import { useState } from "react";

const NewReminder = (props) => {
  const [urgency, setUrgency] = useState("1");
  const [task, setTask] = useState("");

  var bgColor = "#F7CB58";

  if (urgency === "2") {
    bgColor = "#A5BF58";
  }
  if (urgency === "3") {
    bgColor = "#7FA7F8";
  }
  if (urgency === "4") {
    bgColor = "#8677D8";
  }
  if (urgency === "5") {
    bgColor = "#EC6139";
  }

  const handleRadioButton = (e) => {
    setUrgency(e.target.value);
  };

  const handleTaskUpdate = (e) => {
    setTask(e.target.value);
  };

  const handleSubmission = () => {
    props.handleAddNewTask(task, urgency);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "671px",
        height: "500px",
        marginBottom: "10px",
        borderRadius: "150px",
      }}
    >
      <div
        style={{
          paddingTop: "200px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <input
            name="myInput"
            placeholder="Add today's task!"
            value={task}
            onChange={handleTaskUpdate}
            style={{
              width: "500px",
              padding: 8,
            }}
          />
        </label>
        <p
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          How urgent is your task?
          <label>
            <input
              type="radio"
              name="myRadio"
              value="1"
              checked={urgency === "1"}
              onChange={handleRadioButton}
            />
            Chill
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="2"
              checked={urgency === "2"}
              onChange={handleRadioButton}
            />
            Go slowly
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="3"
              checked={urgency === "3"}
              onChange={handleRadioButton}
            />
            No rush
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="4"
              checked={urgency === "4"}
              onChange={handleRadioButton}
            />
            ASAP
          </label>
          <label>
            <input
              type="radio"
              name="myRadio"
              value="5"
              checked={urgency === "5"}
              onChange={handleRadioButton}
            />
            SUPER URGENT
          </label>
        </p>

        <button
          style={{
            width: 200,
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "white",
            borderRadius: 8,
            padding: 10,
            borderWidth: 0,
          }}
          onClick={handleSubmission}
        >
          Add New Task
        </button>
      </div>
    </div>
  );
};

export default NewReminder;
