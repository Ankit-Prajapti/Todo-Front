import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    task: "Task 1",
    done: false,
    date: "04 sept 25",
  },
  {
    id: 2,
    task: "Task 2",
    done: false,
    date: "04 sept 25",
  },
  {
    id: 3,
    task: "Task 3",
    done: false,
    date: "04 sept 25",
  },
];


const todoSlicer = createSlice({
    name: "tasks", 
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        }, 
        markDone:(state, action) => {
            console.log("markDone: ", action.payload)
            const id = action.payload
            const task = state.find((t) => t.id == id);
            if (task){
                task.done = !task.done;
            }else {
                console.log("no task with id : ", id);
                
            }

        }, 
        removeTask: (state, action) => {
            const id = action.payload;
            return state.filter((t) => t.id !== id)
        },
        updateTask: (state, action) => {
          const task = state.find((t) => t.id == action.payload.id);
          if (task) {
            object.assign(task, action.payload)
          }else{
            console.log("NO data to update available");
            
          }
        }
    }
});

export const {addTask, markDone, removetask, updateTask} = todoSlicer.actions;
export default todoSlicer.reducer;