import classes from "./MonthlySummary.module.css";
import { MoveUp } from "lucide-react";

export default function MonthlySummary({summaryText, amount, percentage}) {
  return (
    <div className={classes.card}>
      <div className={classes.income}>
        <p className={classes.wrap}>{summaryText}</p>
        <div className={classes.currency}>$</div>
      </div>
      <p>${amount}</p>
      <div className={classes.percentages}>
        <div className={classes.percentage}>
        <MoveUp />
        <p>{percentage}</p>
        </div>
        <span className={classes.wrap}>vs last month</span>
      </div>
    </div>
  );
}
