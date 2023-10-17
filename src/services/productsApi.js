import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@env";
console.log(API_URL);

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products.json",
    }),
    getCategories: builder.query({
      query: () => "categories.json",
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
