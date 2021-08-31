import styles from "./User.module.css";
const User = ({ user }) => {
  return (
    <div className={styles.card}>
      {user.username} ({user.age} years old)
    </div>
  );
};
export default User;
