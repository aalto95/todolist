import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks-slice";
import {apiSlice} from "../features/api/tasks-api-slice"

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
