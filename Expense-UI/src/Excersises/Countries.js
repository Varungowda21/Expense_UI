// import { name } from "ejs";
// import EmployeesList from "./Employee";

export default function CountriesList(){
  const countries=[{
    name:"india",
    capital:"delhi",
    population:12345
  },
    {
      name:"japan",
      capital:'tokyo',
      population:12365
    }
  ]
  const handleInfo=(ele)=>{
    alert(`${ele.name},${ele.capital},${ele.population}`)
  }
  const calcTotalPopu=()=>{
    const total=countries.reduce((acc,cv)=>{
      return acc+cv.population
    },0)
    alert("Total population "+total)
  }
  return (
    <div>
      <h2>Listing countries- {countries.length}</h2>
      <ul>
        {
          countries.map((ele,i)=>{
            return <li key={i}>{ele.name} <button onClick={()=>handleInfo(ele)}>show</button></li>
          })
        }
      </ul>
      <button onClick={calcTotalPopu}>Total population</button>
    </div>
  )
}