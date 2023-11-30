import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Hero } from '../../types/hero'

// Define a service using a base URL and expected endpoints
export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/heroes' }),
  endpoints: (builder) => ({
    getHeroById: builder.query<Hero, string>({
      query: (id) => `/${id}`,
    }),
    getHeroesByLetter: builder.query<Hero[], string>({
      query: (letter) => `?name_like=^${letter}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetHeroByIdQuery,
  useLazyGetHeroByIdQuery,
  useGetHeroesByLetterQuery,
  useLazyGetHeroesByLetterQuery,
} = heroesApi
