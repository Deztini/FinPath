import classes from "./BudgetCards.module.css";

export default function BudgetCards({ title, amount, subtitle }) {
  return (
    <div className={classes.card}>
      <p className={classes.title}>{title}</p>
      <h1>{!amount ? "$0.00" : amount > 0 ? `$${amount}` : `-$${Math.abs(amount)}`}</h1>
      <p className={classes.subtitle}>{subtitle}</p>
    </div>
  );
}
