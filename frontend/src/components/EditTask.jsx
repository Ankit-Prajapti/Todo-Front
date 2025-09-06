import { useState } from "react";
import { useDispatch } from "react-redux";
import {updateTask} from "../redux/todoSlicer"
function EditTask({prop, toggle}) {
    const dispatch = useDispatch();
  const [task, setTask] = useState(prop.task );
  const [detail, setDetail] = useState(prop.detail );

  const handleSave = () => {
if (task.length > 0) {
const data = {
    id: prop.id,
    task: task,
    detail: detail,
    done: false,
    date: new Date().toDateString()
}
dispatch(updateTask(data));
toggle();
}else{
    alert("Please! add task")
}
  }
  return (
    <div className="edit-cont">
      <div className="input-cont">
        <input
          className="task-int"
          type="text"
          placeholder="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="detail-int"
          type="text"
          placeholder="detail"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </div>
      <button className="save-edit" onClick={() => handleSave()}>Save</button>
    </div>
  );
}

export default EditTask;
