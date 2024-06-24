import axios from "axios"
import Swal from 'sweetalert2'
export default function CategoriesList(props){
  const {categories}=props
  const deleteCategory=(category)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        axios.delete(`http://localhost:3111/api/categories/${category._id}`)
        .then(res=>{
        const result=res.data
        props.handleRemoveCategory(result)
        })
        .catch(err=>{
          console.log(err)
        })
      }
    });
  }

  return(
    <div>
       <h2 style={{color: "chocolate"}}>Categories-{categories.length}</h2>
      {categories.length>0?(<ul className="list-group">
        {
          categories.map(ele=>{
            return <li className="list-group-item" key={ele._id}>{ele.name}<span>    </span><button className="btn btn-info">edit</button><span>    </span><button type="button" className="btn btn-danger" onClick={()=>deleteCategory(ele)}>delete</button></li>
          })
        }
      </ul>):<p>No Categories</p>}
      <br></br>
    </div>
  )
}