import React from 'react'
import { useState } from 'react'
const Hooks2 = () => {
    const [toggle, setToggle] = useState('heeloo');
    const continueus = ()=>{
        if(toggle === 'heeloo')
            setToggle('lellooo');
        else
            setToggle('heeloo')
    }
  return (
    <div>
      <h1>{toggle}</h1>
      <button onClick={continueus}>clcil</button>
    </div>
  )
}

export default Hooks2
