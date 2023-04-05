import ReminderCards from "../components/ReminderCards";
import "./home.css";
import { reminderInputs } from "../reminderdata.js";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import NewReminder from "./NewReminder";

const Home = () => {
  const [isAddPage, setIsAddPage] = useState(false);
  const [data, setData] = useState(reminderInputs);

  const handleClick = () => {
    setIsAddPage((b) => !b);
  };

  const handleAddNewTask = (task, urgency) => {
    setData((oldData) => {
      const newData = {
        id: oldData.length,
        urgency: urgency,
        text: task,
      };

      oldData.push(newData);
      return oldData;
    });

    setIsAddPage(false);
  };

  console.log(isAddPage);

  return (
    <div className="container">
      <div className="wrapper">
        {isAddPage ? (
          <NewReminder handleAddNewTask={handleAddNewTask} />
        ) : (
          <>
            <ReminderCards data={data} />
          </>
        )}

        <button className="addButton" onClick={handleClick}>
          {isAddPage ? (
            <CloseIcon className="buttonSign" />
          ) : (
            <AddIcon className="buttonSign" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;
