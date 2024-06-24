import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import Swal from "sweetalert2";
export default function ExpenseItem({
  _id,
  expenseDate,
  amount,
  title,
  i,
  getCategoryName,
  expensesDispatch,
}) {
  const deleteExpense = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axios
          .delete(`http://localhost:3111/api/expenses/${_id}`)
          .then((response) => {
            const result = response.data;
            console.log(result);
            expensesDispatch({ type: "REM_EXP", payload: result });
            // props.handleRemoveExpense(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{expenseDate}</td>
      <td>{amount}</td>
      <td>{title}</td>
      <td></td>
      {/* <td>{getCategoryName(ele)}</td> */}
      <td>
        <button className="btn btn-danger" onClick={() => deleteExpense(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
}
