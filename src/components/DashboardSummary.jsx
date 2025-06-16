import MonthlySummary from "./MonthlySummary";
import classes from "./DashboardSummary.module.css";
import DashboardCard from "./DashboardCard";

export default function DashboardSummary() {
  return (
    <>
      <h1 style={{ marginBottom: "40px" }}>Financial Dashboard</h1>
      <div className={classes.container}>
        <MonthlySummary
          summaryText="Monthly Income"
          percentage="0%"
          amount="7,500"
        />
        <MonthlySummary
          summaryText="Monthly Expense"
          percentage="5%"
          amount="4,500"
        />
        <DashboardCard text="Add Transaction" url="/finapp/budget" />
        <DashboardCard text="Set New Goal" url="/finapp/goal" />
      </div>
    </>
  );
}
