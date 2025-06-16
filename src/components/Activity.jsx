import classes from "./Activity.module.css";
import ActivityItem from "./ActivityItem";
import groceryImg from "../assets/GroceryImg.jpg";
import ElectricityImg from "../assets/ElectricityImg.jpg";
import GasImg from '../assets/GasImg.jpg';
import Purchase from "../assets/OnlinePurchaseImg.jpg";
import Salary from "../assets/SalaryImg.jpg";
import Tickets from "../assets/TicketsImg.jpg";

export default function ActivitySummary() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Recent Activity</h1>
          <button className={classes.viewBtn}>View All</button>
        </div>
        <ActivityItem
          logo={groceryImg}
          activityTitle="Grocery and Supermarket"
          activitySubtitle="Food"
          amount="7,500"
          date="Jul, 28, 2025"
        />
         <ActivityItem
          logo={Salary}
          activityTitle="Salary Deposit"
          activitySubtitle="Income"
          amount="10,500"
          date="Jul, 29, 2025"
        />
         <ActivityItem
          logo={GasImg}
          activityTitle="Gas Refill"
          activitySubtitle="Transport"
          amount="1,500"
          date="Jul, 27, 2025"
        />
         <ActivityItem
          logo={Tickets}
          activityTitle="Concert Tickets"
          activitySubtitle="Entertainment"
          amount="500"
          date="Jul, 18, 2025"
        />
         <ActivityItem
          logo={ElectricityImg}
          activityTitle="Electricity Bill"
          activitySubtitle="Utility"
          amount="2000"
          date="Jul, 30, 2025"
        />
         <ActivityItem
          logo={Purchase}
          activityTitle="Online Purchase"
          activitySubtitle="Purchase"
          amount="600"
          date="Jul, 21, 2025"
        />
      </div>
    </>
  );
}
