import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export default function Counter2() {
    const {counter,setCounter} = useContext(AppContext)
  return (
    <div>
      <h2>Counter:{counter}</h2>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>

      </button>
    </div>
  )
}
