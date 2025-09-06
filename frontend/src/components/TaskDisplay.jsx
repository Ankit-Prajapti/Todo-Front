import { useState } from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
function TaskDisplay() {
  const tasks = useSelector((state) => state.task);
 

  return <div className="task-display">
  {console.log(tasks)}
    {
        tasks.length > 0 ? (tasks.map((t) => (
        <TaskCard key={t.id} task={t} />

    ))) : <p className="notask">No Task available. Please add one</p>
    }
   

  </div>
}
export default TaskDisplay;
