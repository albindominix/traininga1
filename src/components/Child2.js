import React, { useContext } from 'react'
import { Context } from '../context/Context'

export default function Child2() {
  const name = useContext(Context)
  return (
    <div>
      <h1>Child2</h1>
    </div>
  )
}
