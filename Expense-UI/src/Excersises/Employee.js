import { useState } from "react";
export default function EmployeesList(){
  const initemployee = [
    {
      empId: 1,
      name: "John Doe",
      department: "Engineering",
      experience: 5,
      skills: ["JavaScript", "React", "Node.js"],
      email: "john.doe@example.com"
    },
    {
      empId: 2,
      name: "Jane Smith",
      department: "Marketing",
      experience: 3,
      skills: ["SEO", "Content Creation", "Google Analytics"],
      email: "jane.smith@example.com"
    },
    {
      empId: 3,
      name: "Michael Johnson",
      department: "Sales",
      experience: 7,
      skills: ["Salesforce", "CRM", "Negotiation"],
      email: "michael.johnson@example.com"
    },
    {
      empId: 4,
      name: "Emily Davis",
      department: "Human Resources",
      experience: 4,
      skills: ["Recruiting", "Employee Relations", "Payroll"],
      email: "emily.davis@example.com"
    },
    {
      empId: 5,
      name: "David Brown",
      department: "Finance",
      experience: 6,
      skills: ["Accounting", "Financial Analysis", "Excel"],
      email: "david.brown@example.com"
    }
  ];
  const [total,setTotal]=useState(0)
  const [employees,SetEmployees]=useState(initemployee)
  const handleView=(ele)=>{
    alert(`The skills of ${ele.name} is ${ele.skills.join(', ')}`)
  }
  const handleTotal=(ele)=>{
    alert(`${ele.experience}`)
  }
  const calcTotalExp=()=>{
    const result=employees.reduce((acc,cv)=>{
      return acc+cv.experience
    },0)
    setTotal(result)
  }
  const handleRemove=(emp)=>{
    const userConfirm=window.confirm("Are u sure")
    if(userConfirm){
      const newArr=employees.filter(ele=>{
        return ele.empId!==emp.empId
      })
      SetEmployees(newArr)
    }
  }
  return (
  <div>
    <h2>Listing employees</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>department</th>
          <th>skills</th>
          <th>Trash</th>
          <th>Experience</th>
        </tr>
        </thead>
        <tbody>
          {
            employees.map(ele=>{
              return (
                <tr key={ele.empId}>
                  <td>{ele.empId}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.department}</td>
                  <td><button onClick={()=>{
                    handleView(ele)
                  }
                  }>view</button></td>
                  <td><button onClick={()=>{
                    handleRemove(ele)
                  }
                  }>Delete</button></td>
                  <td> <button onClick={()=>{handleTotal(ele)}}>experience</button></td>
                </tr>
                
              )
            })
          }
        </tbody>
    
    </table>
   <button onClick={calcTotalExp}> Total experience</button> {total}
  </div>)
}

// import { useState } from "react";

// export default function EmployeesList() {
//   const initialEmployees = [
//     {
//       empId: 1,
//       name: "John Doe",
//       department: "Engineering",
//       experience: 5,
//       skills: ["JavaScript", "React", "Node.js"],
//       email: "john.doe@example.com"
//     },
//     {
//       empId: 2,
//       name: "Jane Smith",
//       department: "Marketing",
//       experience: 3,
//       skills: ["SEO", "Content Creation", "Google Analytics"],
//       email: "jane.smith@example.com"
//     },
//     {
//       empId: 3,
//       name: "Michael Johnson",
//       department: "Sales",
//       experience: 7,
//       skills: ["Salesforce", "CRM", "Negotiation"],
//       email: "michael.johnson@example.com"
//     },
//     {
//       empId: 4,
//       name: "Emily Davis",
//       department: "Human Resources",
//       experience: 4,
//       skills: ["Recruiting", "Employee Relations", "Payroll"],
//       email: "emily.davis@example.com"
//     },
//     {
//       empId: 5,
//       name: "David Brown",
//       department: "Finance",
//       experience: 6,
//       skills: ["Accounting", "Financial Analysis", "Excel"],
//       email: "david.brown@example.com"
//     }
//   ];

//   const [total, setTotal] = useState(0);
//   const [employees, setEmployees] = useState(initialEmployees);

//   const handleView = (ele) => {
//     alert(`The skills of ${ele.name} are ${ele.skills.join(', ')}`);
//   };

//   const handleTotal = (ele) => {
//     alert(`${ele.experience}`);
//   };

//   const calcTotalExp = () => {
//     const result = employees.reduce((acc, cv) => {
//       return acc + cv.experience;
//     }, 0);
//     setTotal(result);
//   };

//   const handleRemove = (emp) => {
//     const userConfirm = window.confirm("Are you sure?");
//     if (userConfirm) {
//       const newArr = employees.filter((ele) => {
//         return ele.empId !== emp.empId;
//       });
//       setEmployees(newArr);
//     }
//   };

//   return (
//     <div>
//       <h2>Listing employees</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Emp ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Department</th>
//             <th>Skills</th>
//             <th>Trash</th>
//             <th>Experience</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((ele) => {
//             return (
//               <tr key={ele.empId}>
//                 <td>{ele.empId}</td>
//                 <td>{ele.name}</td>
//                 <td>{ele.email}</td>
//                 <td>{ele.department}</td>
//                 <td>
//                   <button onClick={() => handleView(ele)}>View</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleRemove(ele)}>Delete</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleTotal(ele)}>Experience</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <button onClick={calcTotalExp}>Total experience</button> {total}
//     </div>
//   );
// }