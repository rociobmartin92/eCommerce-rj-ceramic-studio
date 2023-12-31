import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@env";

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
    putFavorites: builder.mutation({
      query: (favorites) => ({
        url: "favorites.json",
        method: "PUT",
        body: favorites,
      }),
    }),
    getFavorites: builder.query({
      query: () => "favorites.json",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  usePutFavoritesMutation,
  useGetFavoritesQuery,
} = productsApi;
