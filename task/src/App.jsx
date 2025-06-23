import React, { useState } from "react";
import TaskBoard from "./components/TaskBoard";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  // const [showTasks, setShowTasks] = useState(false);

  const handleTask = (task) => {
    setTasks([
      ...tasks,
      { ...task, id: Date.now(), color1: false, color2: false },
    ]);
    // setShowTasks(true);
  };

  console.log("tasks", tasks);

  // const handleBack = () => {
  //   setShowTasks(false);
  // };

  return (
    <div>
       <AddTask addTask={handleTask} />
      <TaskBoard tasks={tasks} setTasks={setTasks}/>
     
    </div>
  );
};

export default App;
