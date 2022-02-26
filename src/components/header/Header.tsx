import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between    bg-indigo-300'>
      <Link className='float-right hover:text-pink-900  ' to='/'>
        <button className='hover:bg-red-600   bg-red-200 rounded-lg my-2 px-1 rad'>
          Home
        </button>
      </Link>
    </div>
  )
}

export default Header
