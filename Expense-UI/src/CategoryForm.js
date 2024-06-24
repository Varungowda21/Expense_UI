import { useState } from "react"
import Swal from 'sweetalert2'
import axios from "axios"
export default function CategoryForm(props){
// const [categories,setCategories]=useState([])
const [categoryName,setCategoryName]=useState(' ')
const [categoryServerErrors,setCategoryServerErrors]=useState([])
const [categoryClientErrors,setCategoryClientErrors]=useState({})
const CategoryErrors={}




const runCategoryClientValidations=()=>{
  if(categoryName.trim().length==0){
    CategoryErrors.name='CategoryName cannot be empty'
  }
}
 const handleCategorySubmit=(e)=>{
  e.preventDefault()

  console.log('function called')

  const formData={
    name:categoryName
  }
  // console.log(formData)
  runCategoryClientValidations()
  if(Object.keys(CategoryErrors).length==0){
  axios.post('http://localhost:3111/api/categories',formData)
  .then(res=>{
    Swal.fire({
      title: "Done",
      text: "Category added",
      icon: "success"
    });
    const result=res.data
    console.log(result)
    props.handleAddCategory(result)
    
    setCategoryName('')
    //cleanup the code
    setCategoryServerErrors([])  
    setCategoryClientErrors({})
  })
  .catch((err)=>{
    console.log(err)
    setCategoryServerErrors(err.response.data.errors)
  })
}else {
  setCategoryClientErrors(CategoryErrors)
}}

return (
  <div>
    <h2 style={{color: "chocolate"}}>Add Category</h2>
         {categoryServerErrors.length > 0 && (
          <div>
              
            <h3>Server errors</h3>
            <ul>
              {
                categoryServerErrors.map((ele,i)=>{
                  return <li key={i}>{ele.msg}</li>
                })
              }
            </ul>
   
          </div>
        ) } 
        <form onSubmit={(e) =>{handleCategorySubmit(e)}}>
          <label className="form-label" >Enter Category</label><br/>
          <input 
          type="text"
          value={categoryName}
          // className="form-control"
          onChange={(e)=>{setCategoryName(e.target.value)}}
          /><br></br>
          {categoryClientErrors.name && <span style={{color: "red"}}>{categoryClientErrors.name}</span>}<br></br>
          <input className="btn btn-success" type='submit'/>
          </form>
  </div>
)
}