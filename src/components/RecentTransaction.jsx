import { useState } from "react";
import classes from "./RecentTransactions.module.css";
import { useContext } from "react";
import { BudgetContext } from "../../store/budget-context";
import { GoalContext } from "../../store/goal-context";

// const transactions = [
//   {
//     date: "2024-07-28",
//     category: "Salary",
//     description: "Monthly paycheck",
//     amount: 3500,
//   },
//   {
//     date: "2024-07-27",
//     category: "Rent",
//     description: "Monthly rent",
//     amount: -1500,
//   },
//   {
//     date: "2024-07-26",
//     category: "Food",
//     description: "Groceries",
//     amount: -250.75,
//   },
//   {
//     date: "2024-07-25",
//     category: "Transport",
//     description: "Commute",
//     amount: -80.5,
//   },
//   {
//     date: "2024-07-24",
//     category: "Entertainment",
//     description: "Movie tickets",
//     amount: -45,
//   },
//   {
//     date: "2024-07-23",
//     category: "Investment",
//     description: "Stock dividend",
//     amount: 2700,
//   },
//   {
//     date: "2024-07-22",
//     category: "Utilities",
//     description: "Electricity bill",
//     amount: -120,
//   },
//   {
//     date: "2024-07-21",
//     category: "Shopping",
//     description: "New clothing",
//     amount: -180.2,
//   },
// ];

const ITEMS_PER_PAGE = 1;

export default function RecentTransaction() {
  const {transaction} = useContext(BudgetContext);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = transaction.length === 0 ? 0 : Math.ceil(transaction.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = transaction.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const safePage = totalPages === 0 ? 0 : currentPage

  const prevPageHandler = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPageHandler = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className={classes.container}>
      <h2>Recent Transactions</h2>
      <p style={{ color: "#ccc", fontWeight: "bolder" }}>
        Your latest financial activities
      </p>

      <div className={classes.card}>
        {currentItems.length === 0 ? <p style={{textAlign: "center", marginTop: "70px"}}>No Recent Transactions Found</p>
        : currentItems.map((item) => {
          return (
            <>
              <p>Date: {item.date}</p>
              <p>Category: {item.category}</p>
              <p>Description: {item.description}</p>
              <p>
                Amount:{" "}
                <span style={{ color: item.amount > 0 ? "green" : "red" }}>
                  {" "}
                  {item.amount > 0 ? ("+$" +item.amount) : ("-$" + Math.abs(item.amount))}
                </span>
              </p>
            </>
          );
        })}
      </div>

      {/* Pagination Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <button onClick={prevPageHandler} disabled={currentPage === 1}>
          &#60; Prev
        </button>
        <span>
          Page {safePage} of {totalPages}
        </span>
        <button onClick={nextPageHandler} disabled={currentPage === totalPages || totalPages === 0}>
          Next &#62;
        </button>
      </div>
    </div>
  );
}

/* {currentItems.map((tx, index) => (
        <div
          key={index}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "10px",
            background: "#f9f9f9",
          }}
        >
          <p><strong>{tx.date}</strong> — {tx.category}</p>
          <p>{tx.description}</p>
          <p style={{ color: tx.amount > 0 ? "green" : "red" }}>
            {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount)}
          </p>
        </div>
      ))} */
