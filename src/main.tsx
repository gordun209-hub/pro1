import './index.css'
import './main.css'

import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import store from './app/store'
import Todo from './features/todo/Todo'

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/todo-app' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
