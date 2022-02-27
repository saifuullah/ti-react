import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
  const [windowSize, setWindowSize] = useState()
  useEffect(() => {
    function handleResize(e) {
      const { width } = document.body.getBoundingClientRect()

      setWindowSize(Math.ceil(width))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return <h1>WINDOW SIZE {windowSize}</h1>
}

export default UseEffect
