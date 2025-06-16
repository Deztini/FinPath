import { Link } from "react-router-dom";
import classes from "./Signup.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  hasMinLength,
  isEmail,
  isEqual,
  isNotEmpty,
} from "../utils/validation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();

    if (!isEmail(email)) {
      toast.error("Enter a valid email address");
      return;
    }

    if (!isEqual(password, confirmPassword)) {
      toast.error("Passwords do not match");
      return;
    }

    if (!hasMinLength(password, 6) && !hasMinLength(confirmPassword, 6)) {
      toast.error(
        "Password does not meet the required length, it should be at least 6 characters long."
      );
      return;
    }

    if (
      !isNotEmpty(name) &&
      !isNotEmpty(email) &&
      !isNotEmpty(password) &&
      !isNotEmpty(confirmPassword)
    ) {
      toast.error("Fill the required field");
      return;
    }

    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, goal: "Your Goal" }),
    });

    const data = await response.json();
    if (!response.ok) {
      return toast.error(data.message);
    }
    toast.success("Signup Successful");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <>
      <ToastContainer position="top-center" />
      <div className={classes.container}>
        <div className={classes.text}>
          <h1>Take Charge of Your Finances</h1>
          <p>
            FinPath empowers you with personalized insights to effortessly
            manage your money, invest wisely and achieve your financial dreams.{" "}
          </p>
        </div>
        <div className={classes.signup}>
          <h1 className={classes.title}>Create Your FinPath Account</h1>
          <p className={classes.subtitle}>
            Start your journey to financial freedom today!
          </p>
          <form onSubmit={handleSignup}>
            <div className={classes.column}>
              <label>Full Name</label>
              <input
                type="text"
                required
                className={classes.input}
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={classes.column}>
              <label>Email</label>
              <input
                type="email"
                required
                className={classes.input}
                value={email}
                placeholder="JohnDoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={classes.row}>
              <div className={classes.column}>
                <label>Password</label>
                <input
                  type="password"
                  required
                  className={classes.input}
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "138px" }}
                />
              </div>

              <div className={classes.column}>
                <label>Confirm Password</label>
                <input
                  type="password"
                  required
                  className={classes.input}
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ width: "138px" }}
                />
              </div>
            </div>

            <div className={classes.column}>
              <label>Primary Financial Goal</label>
              <select className={classes.select}>
                <option>Select your goal</option>
                <option>Save for Retirement</option>
                <option>Buy a Home</option>
                <option>Pay off Debt</option>
                <option>Build an Emergency Fund</option>
                <option>Save for Education</option>
                <option>Invest for Wealth Growth</option>
                <option>Start a Business</option>
                <option>Travel/Experience Goals</option>
                <option>Charitable Giving</option>
                <option>Others</option>
              </select>
            </div>

            <div className={classes.btnContainer}>
              <button className={classes.button}>Sign Up</button>
            </div>
          </form>

          <p style={{ textAlign: "center", color: "#9a9999" }}>
            Already have an account?{" "}
            <Link to="/" style={{ color: "#6C63FF", textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
