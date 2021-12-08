import { createSlice } from "@reduxjs/toolkit";
import { useFetchTasksQuery } from "./api/tasks-api-slice";
import { TaskType } from "../types/types";

interface TasksState {
  text: string;
  tasks: Array<TaskType>;
  isFetching: boolean;
  editText: string | null;
  editId: string | null;
  editMode: boolean;
}

const initialState: TasksState = {
  text: "",
  tasks: [],
  isFetching: false,
  editText: null,
  editId: null,
  editMode: false,
};

const tasksSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    textChanged(state, action) {
      state.text = action.payload;
    },
    todoAdded(state, action) {
      state.tasks.push(action.payload);
    },
    todoRemoved(state, action) {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
    },
    toggleEditMode(state, action) {
      state.editMode = action.payload;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    checkToggled(state, action) {
      state.tasks.filter((todo) => todo.id === action.payload.id)[0].isChecked =
        action.payload.isChecked;
    },
  },
});

export const {
  textChanged,
  todoAdded,
  toggleEditMode,
  setEditId,
  setTasks,
  checkToggled,
  todoRemoved,
} = tasksSlice.actions;
export default tasksSlice.reducer;
