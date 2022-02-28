import { Box, Collapse, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Container maxWidth='md'>
      <Box sx={{ my: 4, textAlign: 'center', wordSpacing: '15px' }}>
        <Box>
          <Typography variant='h2'>Welcome to my Portfolyo</Typography>
          <Typography> You can explore my apps </Typography>
        </Box>
        <Typography variant='h3'>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              mt: '10px',
              fontSize: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          >
            <Link style={{ justifyContent: 'space-between' }} to='/todo-app'>
              todoApp
            </Link>
            <Link to='e-commerce'>e-commerce</Link>
          </Box>
        </Typography>
      </Box>
    </Container>
  )
}

export default App
