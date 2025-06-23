import React from "react";

const ComponentThree = ({ tasks, deleteTask }) => {
  // console.log("Component Two functions: ", deleteTask);
  // console.log("Task in component Three: ", tasks);

  return (
    <div className="subComponent">
      <h3>Component Three</h3>
      {tasks.map((task) => (
        <div className="lastDiv" key={task.id}>
          <span>{task.name}</span>
          <button onClick={() => deleteTask(task)} className="btn2">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ComponentThree;
