import Modal from "./UI/Modal";
import { useEffect, useRef } from "react";
import classes from "./NewGoal.module.css";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { GoalContext } from "../../store/goal-context";

export default function NewGoal() {
  const { editableGoal, setGoals, setEditableGoal, setModalOpen } =
    useContext(GoalContext);
  const handleSave = (goalData) => {
    if (editableGoal) {
      setGoals((prev) =>
        prev.map((g) =>
          g.id === editableGoal.id ? { ...goalData, id: g.id } : g
        )
      );
    } else {
      setGoals((prev) => [...prev, goalData]);
    }

    setModalOpen(false);
    setEditableGoal(null);
  };
  const title = useRef();
  const dueDate = useRef();
  const savedMoney = useRef();
  const targetMoney = useRef();

  const formattedDate = editableGoal ? new Date(editableGoal.dueDate)
    .toISOString()
    .split("T")[0] : "";

  useEffect(() => {
    if (editableGoal) {
      title.current.value = editableGoal.title;
      dueDate.current.value = formattedDate;
      savedMoney.current.value = editableGoal.saved;
      targetMoney.current.value = editableGoal.target;
    }
  }, [editableGoal, formattedDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const saved = savedMoney.current.value;
    const target = targetMoney.current.value;

    const newGoal = {
      id: uuidv4(),
      title: title.current.value,
      dueDate: dueDate.current.value,
      saved,
      target,
      progressValue: Math.floor((saved / target) * 100),
    };
    handleSave(newGoal);
  };
  return (
    <Modal title={editableGoal ? "Edit Goal" : "Add New Goal"}>
      <form onSubmit={handleSubmit}>
        <div className={classes.groups}>
          <div className={classes.group}>
            <label>Title</label>
            <input ref={title} type="text" required className={classes.input} />
          </div>

          <div className={classes.group}>
            <label>Due Date</label>
            <input
              ref={dueDate}
              type="date"
              required
              className={classes.input}
            />
          </div>

          <div className={classes.group}>
            <label>Saved Money</label>
            <input
              ref={savedMoney}
              type="number"
              required
              className={classes.input}
            />
          </div>

          <div className={classes.group}>
            <label>Target Money</label>
            <input
              ref={targetMoney}
              type="number"
              required
              className={classes.input}
            />
          </div>
        </div>

        <div className={classes.buttons}>
          <button
            onClick={() => {
              setEditableGoal(null);
              setModalOpen(false);
            }}
            className={classes.cancel}
          >
            Cancel
          </button>
          <button className={classes.save}>Save Goal</button>
        </div>
      </form>
    </Modal>
  );
}
