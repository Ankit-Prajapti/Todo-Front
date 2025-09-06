import { MdDelete, MdDeleteForever, MdOutlineEdit } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import {useDispatch} from "react-redux";
import {removeTask, markDone} from "../redux/todoSlicer.js"

export default function TaskCard({ task }) {
const dispatch = useDispatch();

  return (
    <div className="task-card">
      <h2 className="task-text">{task.task}</h2>
      <div className="task-fn">
        <div className="task-btns">
          <button className="edit-btn">
            <MdOutlineEdit size={24} />
          </button>
          <button className="delete-btn " onClick={() => dispatch(removeTask(task.id))}>
            <MdDeleteForever size={24} className="hover:text-red-700" />
          </button>

          <button className="status-btn" onClick={() => dispatch(markDone(task.id))}>
            <CiCircleCheck size={24} style={{ strokeWidth: 2 }} />
          </button>
        </div>
        <div className="detail-div">
          <button className="detail-btn">Details</button>
        </div>
      </div>
    </div>
  );
}
