import React, { FC, ReactElement, useState } from "react";
import axios from "axios";

export const Login: FC = (): ReactElement => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  };
  const handleSignup = (e: any): void => {
    e.preventDefault();
    setFirstName("");
    setEmail("");
    setPassword("");
    setLastname("");
    axios.post("localhost:3030/signup").then(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <h4> Firstname</h4>
      <input
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <h4> Lastname</h4>
      <input
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      />
      <h4> Email</h4>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <h4>Password</h4>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={(e) => handleSignup(e)}>
        Signup
      </button>
      <button type="submit">Login</button>
    </div>
  );
};
