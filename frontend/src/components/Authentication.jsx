import React, { useState } from "react";
import "./Authentication.css";
import axios from "axios";

function Authentication({ setUser }) {
  const [data, setData] = useState(null);

  const onInputChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        userid: data.email,
        password: data.password,
      },
    };

    axios
      .get("http://localhost:3000/api", config)
      .then((res) => {
        setUser(true);
        localStorage.setItem("user", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
