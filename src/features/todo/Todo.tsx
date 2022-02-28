import { CssBaseline } from '@mui/material'
import Container from '@mui/material/Container'

import Header from '@/components/header/Header'
import TodosList from '@/components/TodosList'

import TodoForm from './TodoForm'

const Todo = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <Header />
        <TodoForm />
        <TodosList />
      </Container>
    </>
  )
}

export default Todo
