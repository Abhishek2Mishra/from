import { useState } from 'react';

function Hooks1() {
  const [count, setCount] = useState('hi');
  const change = ()=>{
    setCount('hello');
  }
  return (
    <div>
        <h1>{count}</h1>;
        <button onClick={change}>click</button>
    </div>
  );
}

export default Hooks1;
