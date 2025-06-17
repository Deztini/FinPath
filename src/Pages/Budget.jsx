import BudgetCards from "../components/BudgetCards";
import RecentTransactions from "../components/RecentTransaction";
import SpendingChart from "../components/SpendingChart";
import TransactionForm from "../components/TransactionForm";
import classes from "./Budget.module.css";
import { useContext } from "react";
import { BudgetContext } from "../store/budget-context";

export default function Budget() {
  const { transaction } = useContext(BudgetContext);

  const totalIncome = transaction
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transaction
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(Number(t.amount)), 0);

  console.log(totalIncome, totalExpense);

  const netBalance = Number(totalIncome) - Number(totalExpense);
  return (
    <>
      <div className={classes.container1}>
        <div className={classes.transactions}>
          <TransactionForm />
          <RecentTransactions />
        </div>
        <div className={classes.container2}>
          <div className={classes.container3}>
            <BudgetCards
              title="Total Income"
              subtitle="Earning this month"
              amount={totalIncome}
            />
            <BudgetCards
              title="Total Expenses"
              subtitle="Spending this month"
              amount={totalExpense}
            />
            <BudgetCards
              title="Net Balance"
              subtitle="Remaining Funds"
              amount={netBalance}
            />
          </div>
          <div className={classes.chart}>
            <SpendingChart />
          </div>
        </div>
      </div>
    </>
  );
}
