import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@/app/store'

interface Todo {
  id: number
  text: string
  completed: boolean
  important: boolean
}

const initialState: Todo[] = [
  {
    id: 1,
    text: 'Learn about React',
    completed: true,
    important: false
  },
  {
    id: 2,
    text: 'Meet friend for lunch',
    completed: false,
    important: true
  }
]
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ text: string; important: boolean }>
    ) => {
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        completed: false,
        important: action.payload.important
      }
      state.push(newTodo)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload)
      state.splice(todoIndex, 1)
    },
    changeImportance: (state, action: PayloadAction<number>) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload)
      state[todoIndex].important = !state[todoIndex].important
    },
    changeCompleted(state, action: PayloadAction<number>) {
      const todoIndex = state.findIndex(todo => todo.id === action.payload)
      state[todoIndex].completed = !state[todoIndex].completed
    },
    editTodo(state, action: PayloadAction<{ id: number; text: string }>) {
      const todoIndex = state.findIndex(todo => todo.id === action.payload.id)
      state[todoIndex].text = action.payload.text
    }
  }
})

export const {
  addTodo,
  deleteTodo,
  changeImportance,
  editTodo,
  changeCompleted
} = todoSlice.actions
export default todoSlice
export const selectTodos = (state: RootState) => state.todos
