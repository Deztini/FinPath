import classes from "./FinancialGoalsSummary.module.css";
import fund from "../assets/MoneyImg.jpg";
import car from "../assets/CarImg.jpg";
import House from "../assets/HouseImg.jpg";
import GoalItem from "./GoalItem";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function FinancialGoalSummary() {
  const navigate = useNavigate();
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <h1>Financial Goals</h1>
        <button className={classes.goalBtn} onClick={() => navigate("/finapp/goal")}>Manage Goals</button>
      </div>
      <GoalItem image={House} text="Buy a House" currentGoal={25000} finalGoal={100000} dueDate="Dec 2025" />
      <GoalItem image={car} text="New Car" currentGoal={30000} finalGoal={70000} dueDate="Mar 2025" />
      <GoalItem image={fund} text="Emergency Fund" currentGoal={7000} finalGoal={10000} dueDate="July  2025" />
    </div>
  );
}
