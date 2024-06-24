import { useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";
export default function ExpenseForm(props) {
  const [expenseDate, setExpenseDate] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseClientErrors, setExpenseClientErrors] = useState({});
  const ExpenseErrors = {};

  const runExpenseClientValidation = () => {
    if (expenseDate.trim().length == 0) {
      ExpenseErrors.expenseDate = "expDate cannot be empty";
    } else if (new Date(expenseDate) > new Date()) {
      ExpenseErrors.expenseDate = "expDate cannot be greater than today";
    }
    if (title.trim().length == 0) {
      ExpenseErrors.title = "title cannot be empty";
    }
    if (amount.trim().length == 0) {
      ExpenseErrors.amount = "amount cannot be empty";
    } else if (amount < 1) {
      ExpenseErrors.amount = "amount should be greater than zero";
    }
    if (expenseCategory.trim().length == 0) {
      ExpenseErrors.expenseCategory = "Expense category cannot be empty";
    }
  };
  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    const formDataa = {
      expenseDate: expenseDate,
      title: title,
      amount: amount,
      Category: expenseCategory,
      description: description,
    };
    // console.log(formDataa)
    runExpenseClientValidation();
    if (Object.keys(ExpenseErrors).length == 0) {
      axios
        .post("http://localhost:3111/api/expenses", formDataa)
        .then((res) => {
          Swal.fire({
            title: "Done",
            text: "Expense added",
            icon: "success",
          });
          const result = res.data;
          console.log(result);
          // props.handleAddExpense(result)
          props.expensesDispatch({ type: "ADD_EXP", payload: result });
          //reset
          setExpenseDate("");
          setTitle("");
          setAmount("");
          setExpenseCategory("");
          setDescription("");
          setExpenseClientErrors({});
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setExpenseClientErrors(ExpenseErrors);
    }
  };
  return (
    <div>
      <h2 style={{ color: "chocolate" }}>Add expense</h2>
      <form onSubmit={(e) => handleExpenseSubmit(e)}>
        <label className="form-label">Expense date: </label>
        <input
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
        />
        <br></br>
        {expenseClientErrors.expenseDate && (
          <span style={{ color: "red" }}>
            {expenseClientErrors.expenseDate}
          </span>
        )}
        <br />

        <label className="form-label">Expense Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        {expenseClientErrors.title && (
          <span style={{ color: "red" }}>{expenseClientErrors.title}</span>
        )}
        <br />

        <label className="form-label">Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br></br>
        {expenseClientErrors.amount && (
          <span style={{ color: "red" }}>{expenseClientErrors.amount}</span>
        )}
        <br />

        <label className="form-label">Description: </label>
        <br></br>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <br></br>

        <label className="form-label">Category: </label>
        <select
          value={expenseCategory}
          onChange={(e) => {
            setExpenseCategory(e.target.value);
          }}
        >
          <option value="">select</option>
          {props.categories.map((ele) => {
            return (
              <option key={ele._id} value={ele._id}>
                {ele.name}
              </option>
            );
          })}
        </select>
        <br />
        {expenseClientErrors.expenseCategory && (
          <span style={{ color: "red" }}>
            {expenseClientErrors.expenseCategory}
          </span>
        )}
        <br />

        <input className="btn btn-success" type="submit" />
      </form>
    </div>
  );
}
