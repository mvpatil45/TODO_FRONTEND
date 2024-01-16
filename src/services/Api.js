import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/' }), // Update with your API URL
  tagTypes: ['TODOS'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/',
      providesTags:['TODOS']
    }),
    createTodo: builder.mutation({
      query: (newTodo) => ({
        url: 'create',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags:['TODOS']
    }),
    updateTodo: builder.mutation({
      query: ({ id, updatedTodo }) => ({
        url: `${id}`,
        method: 'PUT',
        body: updatedTodo,
      }),
      invalidatesTags:['TODOS']
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:['TODOS']
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
