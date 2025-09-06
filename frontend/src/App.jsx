
import TaskDisplay from "./components/TaskDisplay"
import Title from "./components/Title"
import AddTask from "./components/AddTask"
import ClearButton from "./components/ClearButton"
// import EditTask from "./components/EditTask"
import { useSelector } from "react-redux";


function App() {
  const taskLength = useSelector((state) => state.task).length;
 
  return <div className="main-container">
  <Title />
 <AddTask />
 {/* <EditTask /> */}
  <TaskDisplay />
  {taskLength > 0 && <ClearButton />}
  </div>
}

export default App
