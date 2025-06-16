import classes from "./GoalItem.module.css";

export default function GoalItem({
  image,
  text,
  currentGoal,
  finalGoal,
  dueDate,
}) {
  let progressValue = Math.floor((currentGoal / finalGoal) * 100);
  console.log(progressValue);
  return (
    <div className={classes.goals}>
      <div className={classes.header}>
        <img src={image} alt="" />
        <h1>{text}</h1>
      </div>
      <div className={classes.detail}>
        <p>{`$${currentGoal}  / $ ${finalGoal}`}</p>
        <p>Due: {dueDate}</p>
      </div>
      <progress value={progressValue} max="100" className={classes.progress} />
      <div className={classes.value}>{progressValue}% Complete</div>
    </div>
  );
}
