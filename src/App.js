import React, { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import UserForm from "./components/UserForm";

const initialState = [
  { username: "Ali", age: 18 },
  { username: "Amir", age: 24 },
  { username: "Mohamed", age: 19 },
];

function App() {
  const [users, setusers] = useState(initialState);
  const addUserHandler = (user) => {
    setusers((prev) => [user, ...prev]);
  };
  return (
    <div className="App">
      <UserForm onaddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;
