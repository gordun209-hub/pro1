import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '../features/todo/todoSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer.reducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
