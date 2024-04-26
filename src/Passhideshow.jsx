import React, { useState } from 'react'

const Passhideshow = () => {
    const[inpass,Setinpass]=useState(false)
  return (
    <div>
        <h1>input pass hide show</h1>
      <input type={inpass?'text':'password'} />
      <button onClick={()=>Setinpass(!inpass)}>

        {inpass?'Show':'Hide'}
      </button>
    </div>
  )
}

export default Passhideshow
