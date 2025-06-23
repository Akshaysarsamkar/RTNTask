import React, { Fragment, useState } from "react";
import ComponentsOne from "./ComponentsOne";
import Componenttwo from "./Componenttwo";
import ComponentThree from "./Componenthree";

const TaskBoard = ({ tasks, setTasks, taskCom }) => {
  const [tasksOne, setTasksOne] = useState(tasks);
  // const [tasksTwo, setTasksTwo] = useState([]);
  // const [tasksThree, setTasksThree] = useState([]);

  // const moveToTwo = (task) => {
  //   if (!tasksTwo.some((t) => t.id === task.id)) {
  //     setTasksTwo([...tasksTwo, task]);
  //   }
  // };

  // const moveToThree = (task) => {
  //   if (!tasksThree.some((t) => t.id === task.id)) {
  //     setTasksThree([...tasksThree, task]);
  //   }
  // };

  const deleteTask = (task) => {
    setTasksOne(tasksOne.filter((t) => t.id !== task.id));
    // setTasksTwo(tasksTwo.filter((t) => t.id !== task.id));
    // setTasksThree(tasksThree.filter((t) => t.id !== task.id));
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="taskContainer">
      <div className="taskComponent">
        <ComponentsOne tasks={tasksOne}/>
        {/* <Componenttwo tasks={tasksTwo} onTaskClick={moveToThree} />
        <ComponentThree tasks={tasksThree} deleteTask={deleteTask} /> */}
      </div>
      <button onClick={taskCom} className="btn3">
        Add Task
      </button>
    </div>
  );
};

export default TaskBoard;
