import { useState } from "react";

export default function Counter(){
  console.log('component start')
  const [Count,setCount]=useState(0)
  console.log([Count,setCount])
  function handleInc(){
    console.log('inside handleclick')
    setCount(Count+1)
  }
  // function handleDec(){
  //   setCount(Count-1)
  // }
  console.log('before jsx')
  return(
    <div>
      {console.log('after jsx')}
      <h2>Counter component</h2>
      <h3>Counter value {Count}</h3>
      {/* <h3>Counter value {Count}</h3> */}
      <button onClick={handleInc}>Inc</button>
      {/* <button onClick={handleDec}>Dec</button> */}
    </div>
  )
}