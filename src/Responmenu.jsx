import React, { useState } from 'react'

const Responmenu = () => {
    let[menu,Setmenu]=useState(false);

  return (
    <>
    <h1>Responsive menu</h1>
    <button onClick={()=>Setmenu(!menu)} className='menuicon'>&#9776;</button>
      <div className={`menu ${menu?'activemenu':''}`}>
        <ul>
            <li>home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Product</li>
        </ul>
      </div>
    </>
  )
}

export default Responmenu
