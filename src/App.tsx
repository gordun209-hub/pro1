import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='mx-5  flex-row text-center justify-center align-middle'>
      <p className='m-auto'> Welcome to my Apps</p>
      <p>
        <div className='my-2 text-violet-600 flex justify-between'>
          <Link to='/todo-app'>todoApp</Link>
        </div>
      </p>
    </div>
  )
}

export default App
