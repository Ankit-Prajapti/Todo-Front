import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import {useDispatch} from "react-redux";
import { addTask } from "../redux/todoSlicer";
function AddTask() {
  const dispatch = useDispatch();
  const [toggleAdd, setToggleAdd] = useState(false);
 const [title, setTitle] = useState("");
 const [detail, setDetail] = useState("");
 const [idCount, setIdCount] = useState(4);
  const handleAddToggle = () => {
    setToggleAdd(!toggleAdd);
  };

  const handleAdd = () => {
    const data={
      id: idCount,
      task: title,
      detail: detail,
      done: false,
      date: new Date().toDateString(),
    } 
    dispatch(addTask(data))
    setIdCount(idCount + 1);
  }

  return (
    <div className="add-task">
      <button className="add-btn">
        <IoIosAddCircle className="add-icon" /> <span className="add-text">Add Task</span>
      </button>

      <div className="add-container">
        <input type="text" placeholder="Title"  value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="Detail" value={detail} onChange={(e) => setDetail(e.target.value)} />
        <button className="add-btn2" onClick={() => handleAdd()}>Add</button>
      </div>
    </div>
  );
}

export default AddTask;
