// how data to send through context provider

import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const {setUser} =  useContext(UserContext)  // setUser form value inside context provider

  const handleSubmit = (e:any) => {
    e.preventDefault()      // prevent default value as value can go somewhere through url or other thing.
    setUser({username,password})     // sending data using context 
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {" "}
      <input
        placeholder="password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
