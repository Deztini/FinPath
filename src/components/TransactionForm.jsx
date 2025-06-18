import { useState } from "react";
import classes from "./TransactionForm.module.css";
import { SkipForward } from "lucide-react";
import { useContext } from "react";
import { BudgetContext } from "../store/budget-context";
import { isNotEmpty } from "../utils/validation";
import { toast, ToastContainer } from "react-toastify";

const categories = {
  income: [
    "Salary",
    "Freelance",
    "Business Income",
    "Investments",
    "Rental Income",
    "Other Income",
  ],
  expense: [
    "Rent",
    "Groceries",
    "Utilities",
    "Transportation",
    "Dining Out",
    "Health",
    "Entertainment",
    "Loan Payments",
    "Other Expense",
  ],
};

export default function TransactionForm() {
  const { transaction, setTransaction } = useContext(BudgetContext);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rawAmount = formData.get("amount");
    const category = formData.get("category");
    const date = formData.get("date");
    const description = formData.get("description");

    const amount = parseFloat(rawAmount);

    const signedAmount =
      transactionType === "Expense" ? -Math.abs(amount) : Math.abs(amount);

    if (
      !isNotEmpty(rawAmount) ||
      !isNotEmpty(date) ||
      !isNotEmpty(description) ||
      !isNotEmpty(category) ||
      category === "Select a category"
    ) {
      toast.error("Please Fill all the required fields");
      return;
    }

    const transactionData = {
      amount: signedAmount,
      category,
      date,
      description,
    };

    console.log("Transaction Submitted", transactionData);
    setTransaction([...transaction, transactionData]);

    event.target.reset();
  }
  const [transactionType, setTransactionType] = useState("Expense");

  return (
    <>
      <ToastContainer position="top-center" />
      <div className={classes.card}>
        <h1 className={classes.title}>Add New Transaction</h1>
        <p className={classes.subtitle}>Record your income or expense.</p>
        <div className={classes.group}>
          <button
            className={`${classes.button} ${
              transactionType === "Expense" ? classes.active : ""
            }`}
            onClick={() => setTransactionType("Expense")}
          >
            Expense
          </button>
          <button
            className={`${classes.button} ${
              transactionType === "Income" ? classes.active : ""
            }`}
            onClick={() => setTransactionType("Income")}
          >
            Income
          </button>
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.column}>
            <label>Amount</label>
            <input
              type="number"
              required
              placeholder="0.00"
              name="amount"
              className={classes.input}
            />
          </div>

          <div className={classes.column}>
            <label>Category</label>
            <select className={classes.select} name="category" required>
              <option>Select a category</option>

              {(transactionType === "Expense"
                ? categories.expense
                : categories.income
              ).map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className={classes.column}>
            <label>Date</label>
            <input type="date" required className={classes.input} name="date" />
          </div>

          <div className={classes.column}>
            <label>Description</label>
            <textarea
              placeholder="Brief Note about the transaction"
              className={classes.textarea}
              rows="3"
              cols="7"
              name="description"
              required
            />
          </div>

          <button className={classes.addBtn}>Add Transaction</button>
        </form>
      </div>
    </>
  );
}
