import { createContext, useState } from "react";

const dummyGoals = [
  {
    id: 1,
    title: "New Home Down Payment",
    target: 50000,
    saved: 35000,
    dueDate: "Dec 31, 2025",
    progressValue: Math.floor((35000 / 50000) * 100),
  },
  {
    id: 2,
    title: "Dream Vacation Fund",
    target: 8000,
    saved: 6000,
    dueDate: "Dec 21, 2025",
    progressValue: Math.floor((6000 / 8000) * 100),
  },
  {
    id: 3,
    title: "Emergency Savings",
    target: 10000,
    saved: 9500,
    dueDate: "Oct 31, 2025",
    progressValue: Math.floor((9500 / 10000) * 100),
  },
  {
    id: 4,
    title: "New Car Purchase",
    target: 25000,
    saved: 18000,
    dueDate: "Dec 11, 2025",
    progressValue: Math.floor((18000 / 25000) * 100),
  },
  {
    id: 5,
    title: "Student Loan Repayment",
    target: 15000,
    saved: 15000,
    dueDate: "Aug 13, 2025",
    progressValue: Math.floor((15000 / 15000) * 100),
  },
  {
    id: 6,
    title: "Investment Portfolio Growth",
    target: 30000,
    saved: 22000,
    dueDate: "Sep 21, 2025",
    progressValue: Math.floor((22000 / 30000) * 100),
  },
  {
    id: 7,
    title: "Debt Consolidation",
    target: 7000,
    saved: 5000,
    dueDate: "Nov 26, 2025",
    progressValue: Math.floor((5000 / 7000) * 100),
  },
  {
    id: 8,
    title: "Home Renovation",
    target: 12000,
    saved: 9000,
    dueDate: "July 8, 2025",
    progressValue: Math.floor((9000 / 12000) * 100),
  },
  {
    id: 9,
    title: "Further Education",
    target: 20000,
    saved: 10000,
    dueDate: "Jun 29,2025",
    progressValue: Math.floor((10000 / 20000) * 100),
  },
];

export const GoalContext = createContext({
  goals: [],
  setGoals: () => {},
  modalOpen: false,
  setModalOpen: () => {},
  editableGoal: null,
  setEditableGoal: () => {},
});

export default function GoalContextProvider({ children }) {
  const [goals, setGoals] = useState(dummyGoals);
  const [modalOpen, setModalOpen] = useState(false);
  const [editableGoal, setEditableGoal] = useState(null);

  const contextValue = {
    goals,
    setGoals,
    modalOpen,
    setModalOpen,
    editableGoal,
    setEditableGoal,
  };
  return <GoalContext value={contextValue}>{children}</GoalContext>;
}
