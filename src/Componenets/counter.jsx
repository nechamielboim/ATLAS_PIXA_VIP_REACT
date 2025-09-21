import React, { useContext } from 'react'
import { AppContext } from '../context/context'

export default function Counter() {
    const {counter,setCounter} = useContext
    (AppContext)
  return (
    <div className='container'>
      <h2>container:
        {counter}
      </h2>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Add 1</button> 
    </div>
  )
}
