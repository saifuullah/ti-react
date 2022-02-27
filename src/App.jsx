import { createContext, useContext } from 'react'
import './App.css'
import { styled } from '@mui/material/styles'
import { Grid } from '@material-ui/core'
import Tile from './tile'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
const Fname = createContext()
const items = [
  {
    id: '1',
    title: 'Title',
    color: 'primary',
    subtitle: 'subtitle',
    background: '#C8E6C9',
  },
  {
    id: '2',
    title: 'Title-2',
    color: 'secondary',
    subtitle: 'subtitle-2',
    background: '#C8E6C9',
  },
  {
    id: '3',
    title: 'Title-3',
    color: 'black',
    subtitle: 'subtitle-3',
    background: '#C8E6C9',
  },
  {
    id: '4',
    title: 'Title-4',
    color: 'inherit',
    subtitle: 'subtitle-4',
    background: '#C8E6C9',
  },
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function App() {
  var tiles = []
  for (let i = 0; i < 4; i++) tiles.push(<Tile key={i} />)
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Item>
          <div>
            {items.map((tile) => (
              <Tile item={tile} key={tile.id} />
            ))}
          </div>
        </Item>
      </Grid>
    </Box>
  )
}

export default App
