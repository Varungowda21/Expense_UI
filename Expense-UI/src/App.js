import { useState, useEffect, useReducer, act } from "react";
import axios from "axios";
import CategoriesList from "./CategoriesList";
import ExpenseTable from "./ExpenseTable";
import CategoryForm from "./CategoryForm";
import ExpenseForm from "./ExpenseForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const expensesReducer = (state, action) => {
  if (action.type == "SET_EXP") {
    return { ...state, data: action.payload };
  } else if (action.type == "REM_EXP") {
    return {
      ...state,
      data: state.data.filter((ele) => {
        return ele._id != action.payload._id;
      }),
    };
  } else if (action.type == "ADD_EXP") {
    return { ...state, data: [...state.data, action.payload] };
  }
};

export default function App() {
  const [categories, setCategories] = useState([]);
  // const [expenses,setExpenses]=useState([])
  const [expenses, expensesDispatch] = useReducer(expensesReducer, {
    data: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:3111/api/categories")
      .then((res) => {
        const result = res.data;
        console.log(result);
        setCategories(result);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3111/api/expenses")
      .then((res) => {
        const result = res.data;
        console.log(result);
        // setExpenses(result)
        expensesDispatch({ type: "SET_EXP", payload: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const handleFetchCategories=()=>{
  // const xhr=new XMLHttpRequest()
  // xhr.open('GET','http://localhost:3111/api/categories')
  // xhr.send()
  // xhr.onload=function(){
  //   const result=JSON.parse(xhr.responseText)
  //   setCategories(result)
  // }

  // }
  // const handleFetchExpenses=()=>{
  // }
  const handleAddCategory = (Category) => {
    const newArr = [...categories, Category];
    setCategories(newArr);
  };
  // const handleAddExpense = (Expense) => {
  //   const newArr = [...expenses, Expense];
  //   // setExpenses(newArr)
  // };
  const handleRemoveCategory = (category) => {
    const newArr = categories.filter((ele) => {
      return ele._id !== category._id;
    });
    setCategories(newArr);
  };
  // const handleRemoveExpense = (expense) => {
  //   const newArr = expenses.filter((ele) => {
  //     return ele._id !== expense._id;
  //   });
  //   // setExpenses(newArr)
  // };

  // const handleCategoryRemove=(expid)=>{
  // }

  // const handleExpenseRemove=(expid)=>{
  // }

  // }
  const getCategoryName = (expense) => {
    const category = categories.find((cat) => {
      return cat._id === expense.Category;
    });
    if (category) {
      return category.name;
    } else {
      return "N/A";
    }
  };

  return (
    <>
      <h1 className="Title">Expense App </h1>
      <div className="CategorySection">
        <div>
          <CategoriesList
            categories={categories}
            handleRemoveCategory={handleRemoveCategory}
          />
          {/* <button className="btn btn-outline-dark" onClick={handleFetchCategories}>Fetch categories</button> */}
        </div>
        <div>
          <CategoryForm handleAddCategory={handleAddCategory} />
          <br></br>
        </div>
      </div>
      <div className="ExpenseSection">
        <div>
          <ExpenseTable
            expenses={expenses.data}
            getCategoryName={getCategoryName}
            // handleRemoveExpense={handleRemoveExpense}
            expensesDispatch={expensesDispatch}
          />
          {/* <button className="btn btn-outline-dark" onClick={handleFetchExpenses}>
        Fetch expenses
      </button> */}
        </div>
        <div>
          <ExpenseForm
            categories={categories}
            // handleAddExpense={handleAddExpense}
            expensesDispatch={expensesDispatch}
          />
        </div>
      </div>
    </>
  );
}
