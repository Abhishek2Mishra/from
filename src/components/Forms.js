import React, {useState} from 'react'

const Forms = () => {
    const [email, setemail] = useState();
    const [pass,setpass] = useState();
  return (
    <>
        {/* <input type='email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
        <input type='password' value={pass} onChange={(e)=>setpass(e.target.value)}></input>
      <button >add</button>
      <input>{email}</input>
      <input>{pass}</input> */}
      <form action=''>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' value={pass} onChange={(e)=>setpass(e.target.value)}></input>
        </div>
        <button>Login</button>
      </form>
    </>
  )
}

export default Forms
