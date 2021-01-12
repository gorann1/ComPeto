import React from 'react'
import { useEffect, useState } from 'react';


const Hello = () => {
  const [initialState, setInitialState] = useState([])

  useEffect(() => {
    fetch('/api/v1/centers').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonResponse => console.log(jsonResponse))
  },[])

  console.log(initialState)
  return (
    <div>
     <h2>{initialState.length > 0 && initialState.map((e,i) => <li key={i}>{e}</li>)}</h2> 
    </div>
  )
}

export default Hello