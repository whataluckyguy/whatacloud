import React, { useState } from "react";
import "./Authentication.css";
import axios from "axios";

function Authentication() {
  const [user, setUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" />
        {/* <button type="submit">Submit</button> */}
        <input type="submit" value="submit" />
      </form>
      {/* {username ? <h1>Logged in as {username}</h1> : null} */}
    </div>
  );
}

export default Authentication;
