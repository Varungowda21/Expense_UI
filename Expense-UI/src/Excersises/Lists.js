import { set } from "mongoose";
import { useState } from "react";

export default function Tasklist(){
 const [Tasks,setTasks]=useState(['code','exam'])
const handleAdd=()=>{
  const title=prompt("enter task")
  const newArr=[...Tasks]
  newArr.push(title)
  setTasks(newArr)
}

 return (
  <div>
  <h2>Listing Tasks-{Tasks.length}</h2>
  {Tasks.length===0?<p>No tasks Add it</p>:(<ul>
    {
  
        Tasks.map((ele,i)=>{
          return <li key={i}>{ele}</li>
        })

    }</ul>)}
    <button onClick={handleAdd}>Add task</button>
    </div>
 )
}
