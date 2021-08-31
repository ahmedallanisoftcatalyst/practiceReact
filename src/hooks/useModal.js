import { useRef } from "react";

export function useModal(close) {
  const modalRef = useRef(null);
  const closeModal = (event) => {
    if (modalRef.current === event.target) {
      close();
    }
  };
  return [modalRef, closeModal] ;
}

