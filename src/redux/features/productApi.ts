import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }), // Base API URL
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ searchTerm, category, sort, page = 1, limit = 10 }) => {
        console.log(searchTerm, category, sort);
        const params = new URLSearchParams();
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (category) {
          params.append("category", category);
        }
        if (sort) {
          params.append("sort", sort);
        }

        if (page) {
          params.append("page", page.toString());
        }
        if (limit) {
          params.append("limit", limit.toString());
        }
        return {
          url: `/product`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: (id) => `product/${id}`, // Fetch a product by ID
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
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
