import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Task {
  id?: number,
  text: string,
  isChecked?: boolean
}

const DOGS_API_KEY = '0dbe24b1-9f1a-4603-bd8d-e1d45daa6090'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://60a0e51dd2855b00173b15c9.mockapi.io/todolist',
  }),
  tagTypes: ['Tasks'],
  endpoints(builder) {
    return {
      fetchTasks: builder.query<Task[], number | void> ({
        query: () => ({
          url: `/`,
          method: 'GET'
        }),
      }),
      addTask: builder.mutation<Task, Partial<Task>>({
        query: (body) => ({
          url: `/`,
          method: 'POST',
          body
        }),
        invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
      }),
      removeTask: builder.mutation<{ success: boolean, id: number }, number | undefined>({
        query: (id) => ({
          url: `/${id}`,
          method: 'DELETE'
        }),
        invalidatesTags: (result, error, id) => [{ type: 'Tasks', id}]
      }),
      updateTask: builder.mutation<Task, Partial<Task>>({
        query: (data) => {
          const {id, ...body} = data
          return {
            url: `/${id}`,
            method: 'PUT',
            body
          }
        }
      })
    }
  }
})

export const { useFetchTasksQuery, useAddTaskMutation, useRemoveTaskMutation, useUpdateTaskMutation } = apiSlice
