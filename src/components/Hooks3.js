import React from 'react'
import { useState } from 'react'
const Hooks3 = () => {
    
    const bioData = [
        {
            id:0,
            myName:"vinod",
            age:21
        },
        {
            id:1,
            myName:"Abhishek",
            age:22
        },
        {
            id:2,
            myName:"soni",
            age:23
        }
    ]
    const [ty, setty]=useState(bioData);
    const clear  = ()=>{
        setty([])
    }
  return (
    <div>
        {
            ty.map((currEle)=>{
                return <h1 className='h1style'>Name:{currEle.myName} and Age:{currEle.age}</h1>
            })
            
        }
        <button onClick={clear}>click</button>
    </div>
  )
}

export default Hooks3
