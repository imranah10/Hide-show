import React from 'react'
import { useState } from 'react';

const Parahideshow = () => {
    let [parastatus,Setparastatus]=useState(false);
  return (
    <>
       <div>
       <h1>para hide show</h1>
        <button className='Btn border border-danger' onClick={()=>Setparastatus(!parastatus)}>{(parastatus)?'Show':'Hide'}</button>
     
    {(parastatus)?
    
        <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, ipsam!</p>
        :
        ''
    }
     
      
    </div>
    </>
  )
}

export default Parahideshow
