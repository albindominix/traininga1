import React, { useContext } from 'react'
import { Context } from '../context/Context'

export default function Child1() {
  const name = useContext(Context)
  console.log(name)
  return (
    <div>
      <h1>{name}</h1>
    </div>

  )
}
