import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7777/` }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `getAllBooks`,
      providesTags: ["Books"],
    }),
    getOneBook: builder.query({
      query: (id) => `getOneBook/${id}`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/deleteBook/${id}`,
        method: "DELETE",
        transformResponse: (response) => {
          return response.data;
        },
        transformErrorResponse: (response) => {
          return response.status;
        },
        invalidatesTags: ["Books"],
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/updateBook/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["Books"],
    }),
    addBook: builder.mutation({
      query: (payload) => {
        // debugger
        return {
          url: `addBook/`,
          method: "POST",
          body: payload,
          transformResponse: (response, meta, arg) => {
            return response.data;
          },
          transformErrorResponse: (response, meta, arg) => {
            return response.status;
          },
          invalidatesTags: ["Books"],
        };
      },
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useAddBookMutation,
  useGetOneBookQuery,
} = booksApi;
