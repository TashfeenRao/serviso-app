import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";
import toastError from "../toast/toastError";

export default function Register({ setUser }) {
  const [active, setActive] = useState(true);
  const handleSubmit = (user) => {
    localStorage.setItem(user.email, JSON.stringify(user));
    setUser(user);
  };
  const handleSignin = (u) => {
    const getUser = localStorage.getItem(u.email);
    const user = JSON.parse(getUser);
    user && user.password === u.password
      ? setUser(user)
      : toastError("invalid email / password");
  };
  return (
    <>
      {active ? (
          <Login setActive={setActive} handleSignin={handleSignin} />
      ) : (
        <SignUp setActive={setActive} handleSubmit={handleSubmit} />
      )}
    </>
  );
}
