import classes from "./GoalCards.module.css";
import { Ellipsis } from "lucide-react";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { GoalContext } from "../../store/goal-context";

export default function GoalCards() {
  const { goals, setGoals, setEditableGoal, setModalOpen, modalOpen } =
    useContext(GoalContext);
  const [activeId, setActiveId] = useState(null);
  const toggleOverlay = (goalId) => {
    setActiveId((prevGoalId) => (prevGoalId === goalId ? null : goalId));
  };

  const handleDelete = (goal) => {
    const newGoals = goals.filter((g) => g.id !== goal.id);
    setGoals(newGoals);
  };

  const handleEdit = (goal) => {
    setModalOpen(true);
    setEditableGoal(goal);
  };

  return (
    <>
      <div className={classes.container}>
        {goals.map((goal) => {
          return (
            <>
              <div className={classes.card} key={goal.id}>
                <div className={classes.header}>
                  <h1 className={classes.title}>{goal.title}</h1>
                  <button
                    className={classes.button}
                    onClick={() => toggleOverlay(goal.id)}
                  >
                    <Ellipsis />
                  </button>
                </div>

                {activeId === goal.id && !modalOpen && (
                  <div className={classes.overlay}>
                    <div className={classes.column}>
                      <div className={classes.row}>
                        <Pencil />
                        <button
                          className={classes.edit}
                          onClick={() => {
                            handleEdit(goal);
                            setActiveId(null);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                      <div className={classes.row}>
                        <Trash style={{ color: "red" }} />
                        <button
                          className={classes.delete}
                          onClick={() => handleDelete(goal)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <p className={classes.date}>Due: {goal.dueDate}</p>
                <div className={classes.saved}>
                  ${goal.saved} /{" "}
                  <span className={classes.target}>${goal.target}</span>
                </div>
                <progress
                  value={goal.progressValue}
                  max={100}
                  className={classes.progress}
                />
                <p style={{ color: "#908f8f", fontWeight: "bold" }}>
                  {goal.progressValue}% completed
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
