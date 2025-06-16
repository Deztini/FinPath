import { Plus } from "lucide-react";
import classes from "./Hero.module.css";
import NewGoal from "./NewGoal";
import { useContext } from "react";
import { GoalContext } from "../store/goal-context";

export default function Hero() {
  const { goals, setModalOpen } = useContext(GoalContext);
  const filteredGoals = goals.filter((goal) => goal.progressValue === 100);
  const completedGoals = filteredGoals.length;
  const totalGoals = goals.length;

  const totalTargetGoals = filteredGoals.reduce(
    (sum, goal) => sum + Number(goal.target),
    0
  );
  return (
    <>
      <div className={classes.hero}>
        <h1 style={{ color: "#6c63ff" }}>${totalTargetGoals}</h1>
        <p style={{ color: "#aaa9a9" }}>
          You've achieved {completedGoals} out of {totalGoals} goals!
        </p>
        <button className={classes.button} onClick={() => setModalOpen(true)}>
          <Plus /> Add New Goal
        </button>
      </div>
    </>
  );
}
