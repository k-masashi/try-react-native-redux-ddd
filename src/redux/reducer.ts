import { combineReducers } from 'redux'
import articlesReducer, { ArticlesState } from './slice/articles'

export interface AppState {
  articles: ArticlesState
}

export const appReducer = combineReducers<AppState>({
  articles: articlesReducer,
})
