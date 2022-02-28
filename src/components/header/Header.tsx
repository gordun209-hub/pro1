import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box
      sx={{ width: '100%', height: '100%', display: 'flex', color: 'yellow' }}
    >
      <Link to='/'>
        <Typography>Home</Typography>
      </Link>
    </Box>
  )
}

export default Header
