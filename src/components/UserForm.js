import styles from "./UserForm.module.scss";
import { useInput } from "@/hooks/useInput";
import UserFormError from "./UserFormError";
import { useState } from "react";
const validateUser = (user) => {
  if (!user.username || !user.age) {
    return "Please enter a valid name and age (non empty values)";
  } else if (+user.age <= 0) {
    return "Please enter a valid age (>0)";
  } else {
    return "";
  }
};
const UserForm = ({ onaddUser }) => {
  const [message, setMessage] = useState("");
  const [username, changeUsername, setUsername] = useInput("");
  const [age, changeAge, setAge] = useInput("");
  const submitHandler = (evt) => {
    evt.preventDefault();
    const user = { username, age };
    const msg = validateUser(user); // check if user is valid
    setMessage(msg);
    if (!msg) {
      onaddUser(user); // if there is no error add user
      setUsername("");
      setAge("");
    }
  };
  const closeHandler = () => {
    setMessage("");
  }
  return (
    <div className={styles.card}>
      {message && <UserFormError message={message} onclose={closeHandler} />}
      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={changeUsername}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="age">Age (Years):</label>
        <input
          value={age}
          onChange={changeAge}
          type="number"
          id="age"
          name="age"
        />
        <button type="submit" className={styles.btn}>
          Add User
        </button>
      </form>
    </div>
  );
};
export default UserForm;
