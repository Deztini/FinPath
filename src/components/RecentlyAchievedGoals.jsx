import classes from "./RecentlyAchievedGoals.module.css";
import { CheckCircle } from "lucide-react";
import { useContext } from "react";
import { GoalContext } from "../../store/goal-context";

export default function RecentlyAchievedGoals() {
  const {goals} = useContext(GoalContext)
  
  const filteredGoals = goals.filter((goal) => goal.progressValue === 100);
  return (
    <div className={classes.card}>
      <h1 style={{ fontSize: "28px" }}>Recently Achieved Goals</h1>
      <p style={{ color: "#aaa9a9", fontWeight: "500" }}>
        Celebrate your financial wins!
      </p>
      <div>
        {filteredGoals.map((goal) => {
          return (
            <>
              <div className={classes.row}>
                <CheckCircle style={{ color: "green" }} />
                <h3>{goal.title}</h3>
              </div>
              <p className={classes.subtitle}>Achieved: {goal.dueDate}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}
