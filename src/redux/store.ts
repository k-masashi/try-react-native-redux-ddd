import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './reducer'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: appReducer,
  middleware: [thunk],
})
