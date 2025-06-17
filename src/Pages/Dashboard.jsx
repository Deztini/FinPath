import ActivitySummary from "../components/Activity";
import DashboardSummary from "../components/DashboardSummary";
import FinancialGoalSummary from "../components/FinancialGoalsSummary";
import classes from "./Dashboard.module.css";

export default function Dashboard() {
  const name = localStorage.getItem("userName") || "User";
  return (
    <>
    <div className={classes.dashboard}>
        <h2 className={classes.name}>Welcome back, <span style={{color: "#6c63ff", textShadow: "1px 1px 5px #6c63ff"}}>{name}!</span></h2>
      <div className={classes.summary}><DashboardSummary /></div>
      <div className={classes.container}>
        <ActivitySummary />
        <FinancialGoalSummary />
      </div>
    </div>
    
    </>
  );
}
