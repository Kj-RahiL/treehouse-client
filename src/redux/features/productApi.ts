import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }), // Base API URL
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "product", // Specific endpoint to fetch data
      providesTags: ["Products"],
    }),
    // create new product
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "product/create-product",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),

    // Update a product by ID
    updateProduct: builder.mutation({
      query: ({ id, ...updatedProduct }) => ({
        url: `product/${id}`,
        method: "PATCH",
        body: updatedProduct,
      }),
      invalidatesTags: ["Products"],
    }),

    // delete a product by ID
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
