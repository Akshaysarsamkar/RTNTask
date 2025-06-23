import React, { useState } from "react";

const ComponentsOne = ({ tasks, onTaskClick }) => {

  // console.log("Component one functions: ", onTaskClick);
  // console.log("Task in component one: ", tasks);
  
  return (
    <div className="subComponent">
      <h3>Component One</h3>
      {tasks.map((task) => (
        <div
          className="commDiv"
          key={task.id}
          onClick={() =>{onTaskClick(task); task.color1=true}}
          style={task.color1 ? {color:'red'} : {color:'black'}}
        >
          {task.name}
        </div>
      ))}
    </div>
  );
};

export default ComponentsOne;
