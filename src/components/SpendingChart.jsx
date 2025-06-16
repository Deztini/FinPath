import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import classes from "./SpendingChart.module.css";

const data = [
  { name: "Rent", value: 67, color: "#8884d8" },
  { name: "Food", value: 14, color: "#f26c6c" },
  { name: "Shopping", value: 8, color: "#000000" },
  { name: "Utilities", value: 5, color: "#ffaa5b" },
  { name: "Transport", value: 4, color: "#6cc6f6" },
  { name: "Entertainment", value: 2, color: "#8fe388" },
];

export default function SpendingChart() {
  return (
    <div>
      <h2 style={{ textAlign: "left" }}>Spending Distribution</h2>
      <p style={{ textAlign: "left", color: "#ccc", fontWeight: "bold" }}>
        Categorization of your expenses.
      </p>
      <div className={classes.pie}>
        <PieChart width={550} height={370}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{
              fontSize: "14px", 
              maxWidth: "100%",
              whiteSpace: "normal",
              wordBreak: "break-word",
              marginBottom: "20px"
            }}
          />
        </PieChart>
      </div>
    </div>
  );
}
