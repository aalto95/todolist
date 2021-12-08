import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../types/types";

interface TasksState {
  text: string;
  tasks: Array<TaskType>;
  isFetching: boolean;
  editText: string;
  editId: string | null;
  editMode: boolean;
}

const initialState: TasksState = {
  text: "",
  tasks: [],
  isFetching: false,
  editText: "",
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
    editTextChanged(state, action) {
      state.editText = action.payload;
    },
    todoAdded(state, action) {
      state.tasks.push(action.payload);
    },
    todoRemoved(state, action) {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
    },
    todoChanged(state, action) {
      state.tasks.filter((todo) => todo.id === action.payload.id)[0].text =
        action.payload.text;
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
  todoChanged,
  editTextChanged,
} = tasksSlice.actions;
export default tasksSlice.reducer;
