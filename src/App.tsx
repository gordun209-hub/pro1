import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <p> Welcome to my Apps</p>
      <p>
        <div>
          <Link to='/todo-app'>todoApp</Link>
        </div>
      </p>
    </div>
  )
}

export default App
