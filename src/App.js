import React,{useState} from "react";
import "./App.css";
import Users from "./components/Users";

const initialState = [
  { username: "Ali", age: 18 },
  { username: "Amir", age: 24 },
  { username: "Mohamed", age: 19 },
];

function App() {
  const [users, setusers] = useState(initialState);
  return (
    <div className="App">
      <Users users={users} />
    </div>
  );
}

export default App;
