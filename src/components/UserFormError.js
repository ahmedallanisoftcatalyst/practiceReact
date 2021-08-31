import styles from "./UserFormError.module.scss";
import { useModal } from "@/hooks/useModal";

const UserFormError = ({ message, onclose }) => {
  const [modalRef, closeModal] = useModal(onclose);
  return (
    <div ref={modalRef} onClick={closeModal} className={styles.modal}>
      <div className={styles.card}>
        <div className={styles.header}>Invalid input</div>
        <div className={styles.body}>
          {message}
          <button onClick={onclose} className={styles.btn}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default UserFormError;
