import React, { useState } from 'react'

const Hooks4 = () => {
    const [myobj, setMyObj] = useState({myName:'abhihsehk',id:4,age:34});
    const changeObject = ()=>{
        setMyObj({...myobj, myName:'ciblu'})
    }
  return (
    <div>
      <h1>my name is {myobj.myName} id is {myobj.id} and age is {myobj.age}</h1>
      <button onClick={changeObject}>update</button>
    </div>
  )
}

export default Hooks4
