import React from 'react'
import { Fname } from './App'

const ComA = () => {
  return (
    <>
      <Fname.Consumer>
        {(fname) => {
          return <h1> {fname} THIS IS COMPONENT A</h1>
        }}
      </Fname.Consumer>
    </>
  )
}
export default ComA
