import styles from "./UserForm.module.scss";
import { useInput } from "@/hooks/useInput";
const UserForm = ({ onaddUser }) => {
  const [username, changeUsername] = useInput("");
  const [age, changeAge] = useInput("");
  const submitHandler = (evt) => {
    evt.preventDefault();
    onaddUser({ username, age });
  };
  return (
    <div className={styles.card}>
      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={changeUsername}
          type="text"
          id="username"
          name="username"
          required
        />
        <label htmlFor="age">Age (Years):</label>
        <input
          value={age}
          onChange={changeAge}
          type="number"
          id="age"
          name="age"
          required
        />
        <button type="submit" className={styles.btn}>
          Add User
        </button>
      </form>
    </div>
  );
};
export default UserForm;
