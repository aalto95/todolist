import {createSlice} from "@reduxjs/toolkit";

interface TasksState {
  text: string
  tasks: Array<{}>
  isFetching: boolean
  editText: string | null
  editId: string | null
  editMode: boolean
}

const initialState: TasksState = {
  text: "",
  tasks: [],
  isFetching: false,
  editText: null,
  editId: null,
  editMode: false
}

const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {

  }
})
