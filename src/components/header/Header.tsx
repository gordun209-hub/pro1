import { Box, CardContent, Container } from '@mui/material'
import { flexbox, sizing, textAlign } from '@mui/system'
import { FaAlignJustify } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box component={'h1'} sx={{ textAlign: 'right' }}>
      <Link to='/'>Home</Link>
    </Box>
  )
}

export default Header
