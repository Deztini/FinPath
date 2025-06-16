import classes from "./MonthlySummary.module.css";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DashboardCard({ text, url }) {
    const navigate = useNavigate();
  return (
    <div className={classes.card}>
      <button className={classes.addBtn} onClick={() => navigate(url)}>
        <Plus style={{ color: "blue" }} />
      </button>

      <h1 className={classes.text}>{text}</h1>
    </div>
  );
}
