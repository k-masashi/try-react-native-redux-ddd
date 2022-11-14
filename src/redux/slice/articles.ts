import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Article, { ArticleId } from '../../domain/article'

export interface ArticlesState {
  articles: Article[]
}

const initialState: ArticlesState = {
  articles: [],
}

const slice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      return {
        ...state,
        articles: action.payload,
      }
    },
  },
})

export const { setArticles } = slice.actions
export default slice.reducer
