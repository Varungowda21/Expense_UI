import React, { useState } from "react";
import axios from "axios"
export default function ReactinterTask(){
 const [users,setUsers]=useState([])
 const handleShow=()=>{
   axios.get('https://jsonplaceholder.typicode.com/users')
   .then(res=>{
    const result=res.data
 
    setUsers(result)

   })
 }
 const handleInfo=()=>{
  alert(``)
 }
 return(
  <div>
  <h1>Number of users-{users.length}</h1>
  <button onClick={handleShow}>show</button>
    <ul>{
     users.map(ele=>{
      return <li>{ele.name} - <button onClick={handleInfo}>Information</button></li>
    })}
    </ul>
  </div>
 )
}