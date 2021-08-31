import User from "./User"
import styles from "./Users.module.css";
const Users = ({ users }) => {
  return (
    <div className={styles.card}>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};
export default Users