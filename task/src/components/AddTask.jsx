import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  console.log("All tasks: ", addTask);

  const [input, setInput] = useState("");
  const handleAdd = () => {
    addTask({ name: input });
  };

  return (
    <div className="addContainer">
      <h2>Add Task</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
        className="inputData"
      />
      <button onClick={handleAdd} className="btn1">
        Add
      </button>
    </div>
  );
};

export default AddTask;
