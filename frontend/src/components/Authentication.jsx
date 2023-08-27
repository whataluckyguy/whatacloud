import React, { useState } from "react";
import "./Authentication.css";
import axios from "axios";

function Authentication({ setUser }) {
  const [data, setData] = useState(null);

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const upload = async () => {
    axios
      .post("http://localhost:5000/upload")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
    console.log(config);
    axios
      .post("http://localhost:5000/auth", config)
      .then((res) => {
        console.log(res.data);
        // setData(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleSubmit}>login</button>
      <button onClick={upload}>upload</button>
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
