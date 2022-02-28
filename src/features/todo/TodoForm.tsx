import { Box, Button, Container, Divider, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'

import { useAppDispatch, useAppSelector } from '@/app/hooks'

import { selectFilter, setFilter } from './filterSlice'
import { addTodo } from './todoSlice'

const TodoForm = () => {
  const dispatch = useAppDispatch()

  const filter = useAppSelector(selectFilter)

  return (
    <Box
      sx={{
        py: 10,
        heigth: '100vh',
        bgcolor: '#cfe8fc',
        textAlign: 'center '
      }}
    >
      <Formik
        initialValues={{
          text: '',
          important: false
        }}
        onSubmit={e => {
          dispatch(addTodo(e))
        }}
      >
        {() => (
          <Form>
            <Box>
              <Typography mt={2} variant='h2'>
                write your todo
              </Typography>
              <Divider />
              <Field
                required
                style={{ width: '300px', height: '40px', padding: '10px' }}
                id='text'
                name='text'
                placeholder='new Todo'
              />

              <Divider />
              <Box sx={{ padding: '15px' }}>
                <button>Add new todo</button>
                <Button
                  onClick={() =>
                    dispatch(
                      setFilter(filter.filter === 'all' ? 'important' : 'all')
                    )
                  }
                >
                  <Typography>list importants</Typography>
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
export default TodoForm
