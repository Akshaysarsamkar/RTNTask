import React from "react";

const Componenttwo = ({ tasks, onTaskClick }) => {

  // console.log("Component Two functions: ", onTaskClick);
  //  console.log("Task in component two: ", tasks);

  return (
    <div className="subComponent">
      <h3>Component Two</h3>
      {tasks.map((task) => (
        <div
          className="commDiv"
          key={task.id}
          onClick={() =>{ onTaskClick(task); task.color2=true}}
          style={task.color2?{color:"green"}:{color:'blaack'}}
        >
          {task.name}
        </div>
      ))}
    </div>
  );
};

export default Componenttwo;
