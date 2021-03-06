import '@fontsource/roboto/700.css'

import {
  Box,
  Button,
  Checkbox,
  Container,
  Input,
  Paper,
  Typography
} from '@mui/material'
import { FaTrashAlt } from 'react-icons/fa'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectFilter } from '@/features/todo/filterSlice'
import {
  changeCompleted,
  changeImportance,
  deleteTodo,
  selectTodos
} from '@/features/todo/todoSlice'

const TodosList = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)
  const filter = useAppSelector(selectFilter)

  const currentTodos =
    filter.filter === 'all' ? todos : todos.filter(todo => todo.important)
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: 3,
        margin: '10px',
        padding: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        bgcolor: '#e47636',
        width: '100%'
      }}
    >
      {currentTodos.map(todo => {
        return (
          <Box
            key={todo.id}
            sx={{
              borderRadius: 3,
              margin: '10px',
              padding: '10px',
              wordWrap: 'break-word',
              width: '45%',
              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7]
              }
            }}
          >
            <Paper elevation={4}>
              <Button
                onClick={() => {
                  dispatch(deleteTodo(todo.id))
                }}
              >
                <FaTrashAlt
                  style={{
                    color: 'red',
                    fontSize: '15px',
                    marginRight: '20px'
                  }}
                />
              </Button>

              <Typography
                mt={2}
                mb={1}
                variant='h3'
                sx={{ textAlign: 'center' }}
              >
                {todo.text}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'reverse'
                }}
              >
                <Checkbox
                  color='default'
                  onChange={() => dispatch(changeCompleted(todo.id))}
                />
                <Typography>completed?</Typography>
              </Box>
              <Button
                type='button'
                onClick={() => dispatch(changeImportance(todo.id))}
              >
                {todo.important ? 'make not important' : 'make important'}
              </Button>
            </Paper>
          </Box>
        )
      })}
    </Box>
  )
}

export default TodosList
