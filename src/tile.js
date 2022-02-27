import React, { useRef } from 'react'
import './tile.css'
import { Button, Typography, Card, CardHeader } from '@material-ui/core'

export default function Tile(props) {
  const background = useRef(null)
  console.log(props)
  const colors = [
    '#BBDEFB',
    '#00796B',
    '#E1F5FE',
    '#FBE9E7',
    '#E0E0E0',
    '#795548',
  ]

  function changeTileBackground() {
    background.current.style.background =
      colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <>
      <Card className='MyGrid'>
        <div
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          }}
          className='title'
          ref={background}
        >
          <div className='Child title'>
            <Typography>{props.item.title}</Typography>
          </div>
          <div>
            <Button
              variant='contained'
              color={props.item.color}
              onClick={changeTileBackground}
            >
              Change color
            </Button>
          </div>
          <Typography> {props.item.subtitle} </Typography>
        </div>
      </Card>
    </>
  )
}
