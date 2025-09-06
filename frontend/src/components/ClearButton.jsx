import { useDispatch } from "react-redux"
import { clearTask } from "../redux/todoSlicer"

export default function ClearButton() {
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearTask());
    }
  return (
    <div className='clear-btn-cont'>
      <button className='clear-btn' onClick={() => handleClear()}>Clear All</button>
    </div>
  )
}
