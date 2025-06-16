import classes from "./BudgetCards.module.css";

export default function BudgetCards({ title, amount, subtitle }) {
  
  return (
    <div className={classes.card}>
      <p className={classes.title}>{title}</p>
      <h1>${amount ? amount : "0.00"}</h1>
      <p className={classes.subtitle}>{subtitle}</p>
    </div>
  );
}
