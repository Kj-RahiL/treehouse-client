import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), // Base API URL
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'posts', // Specific endpoint to fetch data
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
