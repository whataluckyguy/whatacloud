import React, { useState } from "react";
import "./Authentication.css";
import axios from "axios";

function Authentication() {
  const [user, setUser] = useState(false);

  const onInputChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            onInputChange(e);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            onInputChange(e);
          }}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Authentication;
