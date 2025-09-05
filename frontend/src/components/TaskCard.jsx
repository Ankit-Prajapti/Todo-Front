import { MdDelete, MdDeleteForever, MdOutlineEdit } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

export default function TaskCard() {
  return (
    <div className="task-card">
      <h2 className="task-text">Task 1</h2>
      <div className="task-fn">
        <div className="task-btns">
          <button className="edit-btn">
            <MdOutlineEdit size={24} />
          </button>
          <button className="delete-btn ">
            <MdDeleteForever size={24}  className="hover:text-red-700" />
          </button>

          <button className="status-btn">
            <CiCircleCheck size={24} style={{strokeWidth: 2}}  />
          </button>
        </div>
        <div className="detail-div">
          <button className="detail-btn">Details</button>
        </div>
      </div>
    </div>
  );
}
