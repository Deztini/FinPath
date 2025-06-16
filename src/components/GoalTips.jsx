import classes from "./GoalTips.module.css";
import { Lightbulb } from "lucide-react";

export default function GoalTips() {
  return (
    <div className={classes.card}>
      <h1 style={{ fontSize: "28px" }}>Tips for Goal Achievement</h1>
      <p style={{ color: "#aaa9a9", fontWeight: "500" }}>
        Expert advice to help you succeed.
      </p>

      <div className={classes.row}>
        <Lightbulb style={{ color: "#6c63ff" }} />
        <p>
          Set SMART goals (Specific, Measurable, <br /> Achievable, Relevant,
          Time-bound).
        </p>
      </div>
      <div className={classes.row}>
        <Lightbulb style={{ color: "#6c63ff" }} />
        <p>Automate your savings to stay consistent.</p>
      </div>
      <div className={classes.row}>
        <Lightbulb style={{ color: "#6c63ff" }} />
        <p>Track your progress regularly to stay motivated.</p>
      </div>
      <div className={classes.row}>
        <Lightbulb style={{ color: "#6c63ff" }} />
        <p>Review and adjust goals as your <br /> financial situation changes.</p>
      </div>
      <div className={classes.row}>
        <Lightbulb style={{ color: "#6c63ff" }} />
        <p>Celebrate small wins along the way!</p>
      </div>
    </div>
  );
}
