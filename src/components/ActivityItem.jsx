import classes from "./ActivityItem.module.css";
// import { useContext } from "react";
// import { BudgetContext } from "../../store/budget-context";

export default function ActivityItem({activityTitle, activitySubtitle, logo, date, amount}) {
  // const { transaction } = useContext(BudgetContext);
  return (
    <div className={classes.activity}>
      {/* {transaction.map((t) => {
        return (
          <>
            <div className={classes.activityItem}>
              <h2 className={classes.title}>
                {t.category}
              </h2>
            </div>
            <div>
              <h3 className={classes.amount}>+${t.amount}</h3>
              <p className={classes.date}>{t.dueDate}</p>
            </div>
          </>
        );
      })} */}
      <div className={classes.activityItem}>
        <img src={logo} alt="" />
        <h2 className={classes.title}>
          {activityTitle} <br />{" "}
          <span className={classes.subtitle}>{activitySubtitle}</span>
        </h2>
      </div>
      <div>
        <h3 className={classes.amount}>+${amount}</h3>
        <p className={classes.date}>{date}</p>
      </div>
    </div>
  );
}
