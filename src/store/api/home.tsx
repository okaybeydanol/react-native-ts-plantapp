import {createApi} from '@reduxjs/toolkit/query/react';

// Middleware
import {baseQueryAcceptJson} from '@src/store/api/middleware';
import {CategoriesApiParams, QuestionsApiParams} from './types';

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: baseQueryAcceptJson,
  keepUnusedDataFor: 1,
  endpoints: builder => ({
    getCategories: builder.query<CategoriesApiParams, void>({
      query: () => ({
        url: '/getCategories',
        method: 'GET',
      }),
    }),
    getQuestions: builder.query<QuestionsApiParams[], void>({
      query: () => ({
        url: '/getQuestions',
        method: 'GET',
      }),
    }),
  }),
});
export const {useGetCategoriesQuery, useGetQuestionsQuery} = homeApi;
