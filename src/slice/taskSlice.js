import { createSlice } from '@reduxjs/toolkit'

const initialState={
    tasklist:[],
    selectedTask:{}
}
export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
      
        addTaskToList:(state,action)=>{
            const id=Math.random()*1000
            let task={...action.payload,id}
            state.tasklist.push(task)
        },
        removeFromList:(state,action)=>{
            state.tasklist=state.tasklist.filter((task)=>task.id !==action.payload.id)
        },
        updateTaskList:(state,action)=>{
            state.tasklist=state.tasklist.map((task)=>task.id===action.payload.id?action.payload:task)
        },
        setSelectedTask:(state,action)=>{
            state.selectedTask=action.payload
        }
    },
  })

  export const {addTaskToList,removeFromList,updateTaskList,setSelectedTask}=taskSlice.actions
  export default taskSlice.reducer