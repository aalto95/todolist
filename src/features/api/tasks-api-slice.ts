import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TaskType } from "../../types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://60a0e51dd2855b00173b15c9.mockapi.io/todolist",
  }),
  tagTypes: ["Tasks"],
  endpoints(builder) {
    return {
      fetchTasks: builder.query<TaskType[], number | void>({
        query: () => ({
          url: `/`,
          method: "GET",
        }),
      }),
      addTask: builder.mutation<TaskType, Partial<TaskType>>({
        query: (body) => ({
          url: `/`,
          method: "POST",
          body,
        }),
        invalidatesTags: [{ type: "Tasks", id: "LIST" }],
      }),
      removeTask: builder.mutation<
        { success: boolean; id: string },
        string | undefined
      >({
        query: (id) => ({
          url: `/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: (result, error, id) => [{ type: "Tasks", id }],
      }),
      updateTask: builder.mutation<TaskType, Partial<TaskType>>({
        query: (data) => {
          const { id, ...body } = { ...data, isChecked: !data.isChecked };
          return {
            url: `/${id}`,
            method: "PUT",
            body,
          };
        },
      }),
    };
  },
});

export const {
  useFetchTasksQuery,
  useAddTaskMutation,
  useRemoveTaskMutation,
  useUpdateTaskMutation,
} = apiSlice;
