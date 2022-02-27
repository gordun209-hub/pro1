import { Field, Form, Formik } from 'formik'
import { FaTrashAlt } from 'react-icons/fa'

import { useAppDispatch, useAppSelector } from '@/app/hooks'

import { selectFilter, setFilter } from './filterSlice'
import {
  addTodo,
  changeCompleted,
  changeImportance,
  deleteTodo,
  selectTodos
} from './todoSlice'

const TodoForm = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)

  const filter = useAppSelector(selectFilter)
  const currentTodos =
    filter.filter === 'all' ? todos : todos.filter(todo => todo.completed)
  return (
    <div className=' container mx-auto  py-2    bg-slate-200'>
      <Formik
        initialValues={{
          text: '',
          important: false
        }}
        onSubmit={e => {
          dispatch(addTodo(e))
        }}
      >
        {({ values }) => (
          <Form className='border-2'>
            <div className='flex-row  justify-center  text-center mt-2 mb-2'>
              <p className='text-sky-800 p'>write your todo</p>
              <Field
                id='text'
                name='text'
                className='border-4  border-gray-600 rounded-lg p-1 text-center'
                placeholder='new Todo'
              />
              <div>
                <button
                  className='mx-2 my-3'
                  type='button'
                  onClick={() =>
                    dispatch(
                      setFilter(filter.filter === 'all' ? 'important' : 'all')
                    )
                  }
                >
                  list importants
                </button>
              </div>
            </div>
            <div className='flex justify-center flex-row-reverse items-center space-3'>
              <button
                className=' float-left  m-3 bg-slate-200  text-red-50 contrast-50   hover:blue-500 '
                type='submit'
              >
                <p className='text-center text-xs'>Add new todo</p>
              </button>

              <label htmlFor='lastName'>
                Important
                <Field className='mx-3' name='important' type='checkbox' />
                {`${values.important}`}
              </label>
            </div>
          </Form>
        )}
      </Formik>

      <div className=' flex-grow text-xs  justify-between  p-5  '>
        {currentTodos.map(todo => {
          return (
            <div
              key={todo.id}
              className='mx-1  border-2 flex  flex-row-reverse justify-between  '
            >
              <button
                className=' p-2  '
                onClick={() => {
                  dispatch(deleteTodo(todo.id))
                }}
              >
                <FaTrashAlt />
              </button>
              {todo.important ? (
                <p className=' m-2 text-base'>{todo.text}</p>
              ) : (
                <p className=' m-2 text-base bg-red-600'>{todo.text}</p>
              )}
              <div className='space-x-5 text-center py-2'>
                <label htmlFor='checkbox'>Completed</label>
                <input
                  type='checkbox'
                  className=''
                  onChange={() => dispatch(changeCompleted(todo.id))}
                />
              </div>
              <button
                type='button'
                className='bg-red-400 text-white container h-10 w-20 rounded-lg'
                onClick={() => dispatch(changeImportance(todo.id))}
              >
                {todo.important ? 'make not important' : 'make important'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default TodoForm
