import { Goal } from "lucide-react";
import Hero from "../components/Hero";
import GoalCards from "../components/GoalCards";
import NewGoal from "../components/NewGoal";
import RecentlyAchievedGoals from "../components/RecentlyAchievedGoals";
import GoalTips from "../components/GoalTips";
import classes from "./Goals.module.css";
import { GoalContext } from "../store/goal-context";
import { useContext } from "react";

export default function Goals() {
  const { modalOpen } = useContext(GoalContext);
  // const filteredGoals = goals.filter((goal) => goal.progressValue === 100);
  // const completedGoals = filteredGoals.length;
  // const totalGoals = goals.length;

  // const totalTargetGoals = filteredGoals.reduce(
  //   (sum, goal) => sum + Number(goal.target),
  //   0
  // );

  // const handleDelete = (goal) => {
  //   const newGoals = goals.filter((g) => g.id !== goal.id);
  //   setGoals(newGoals);
  // };

  // const handleEdit = (goal) => {
  //   setModalOpen(true);
  //   setEditableGoal(goal);
  // };

  // const handleSave = (goalData) => {
  //   if (editableGoal) {
  //     setGoals((prev) =>
  //       prev.map((g) =>
  //         g.id === editableGoal.id ? { ...goalData, id: g.id } : g
  //       )
  //     );
  //   } else {
  //     setGoals((prev) => [...prev, goalData]);
  //   }

  //   setModalOpen(false);
  //   setEditableGoal(null);
  // };
  return (
    <>
      <div className={classes.goal}>
        <h1>Your Financial Goals</h1>
        <p style={{ color: "#aaa9a9" }}>
          Track your progress, manage your aspirations, and achieve financial
          independence.
        </p>
        <Hero />
        {modalOpen && <NewGoal />}
        <GoalCards />

        <div className={classes.container}>
          <RecentlyAchievedGoals />
          <GoalTips />
        </div>
      </div>
    </>
  );
}
