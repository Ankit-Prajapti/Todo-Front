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
    if (title.length > 0){
      let data={
      id: idCount,
      task: title,
      detail: detail,
      done: false,
      date: new Date().toDateString(),
    } 
    dispatch(addTask(data))
    setIdCount(idCount + 1);
    setTitle("");
    setDetail("");
    handleAddToggle();
    }else{
      alert("Please add Task or else click Close button")
    }
    
  }

  return (
    <div className="add-task">
      

    {

      toggleAdd ?
      (
        <div className="add-container">
        <input type="text" placeholder="Title"  value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <input type="text" placeholder="Detail" value={detail} onChange={(e) => setDetail(e.target.value)} />
        <button className="add-btn2" onClick={() => handleAdd()}>Add</button>
        <button className="close-btn" onClick={() => handleAddToggle()}>Close</button>
      </div>
      ) : (<button className="add-btn" onClick={() => handleAddToggle()}>
        <IoIosAddCircle className="add-icon" /> <span className="add-text">Add Task</span>
      </button>)
    }
      
    </div>
  );
}

export default AddTask;
