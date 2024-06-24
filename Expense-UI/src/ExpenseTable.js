// import axios from "axios";\
// import Swal from "sweetalert2";
import ExpenseItem from "./ExpenseItem";
export default function ExpenseTable(props) {
  const { expenses, getCategoryName, expensesDispatch } = props;

  return (
    <div>
      <h2 style={{ color: "chocolate" }}>
        Listing expenses - {expenses.length}
      </h2>
      {expenses.length > 0 ? (
        <div>
          <table border="1" className="table">
            <thead>
              <tr>
                <th scope="col">Sl no</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((ele, i) => {
                return (
                  <ExpenseItem
                    key={ele._id}
                    {...ele}
                    i={i}
                    expensesDispatch={expensesDispatch}
                    getCategoryName={getCategoryName}
                  />
                );
              })}
            </tbody>
          </table>
          <h3>
            Total expenses-
            {expenses.reduce((acc, cv) => {
              return acc + cv.amount;
            }, 0)}
          </h3>
        </div>
      ) : (
        <p>No expenses</p>
      )}
    </div>
  );
}
