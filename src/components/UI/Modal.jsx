import classes from "./Modal.module.css";
import { useContext } from "react";
import { GoalContext } from "../../../store/goal-context";

export default function Modal({ children,  title }) {
  const {setEditableGoal, setModalOpen} = useContext(GoalContext);
  return (
    <>
      <div className={classes.backdrop} onClick={() => {
        setEditableGoal(null)
        setModalOpen(false)
      }} />
      <dialog open className={classes.modal}>
        <h2>{title}</h2>
        {children}
      </dialog>
    </>
  );
}
