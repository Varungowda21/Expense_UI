import { useState } from "react"
export default function Users(){
 const [users,setUsers]=useState(['varun','charan'])
 const handleRemove=(n)=>{
 const userConfirm=window.confirm("are you sure?")
 if(userConfirm){
  const newArr=users.filter(ele=>{
    return ele!=n
  })
  setUsers(newArr)
 }
 }
  return(
    <div>
      <h1>Total-users - {users.length}</h1>
      <ul>
        {
          users.map((ele,i)=>{
            return <li key={i}>{ele}<button onClick={()=>{
              handleRemove(ele)
            }}> Remove</button></li>
          })
        }
      </ul>
    </div>
  )
}