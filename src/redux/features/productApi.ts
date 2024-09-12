import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }), // Base API URL
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'product', // Specific endpoint to fetch data
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
