import classes from "./Modal.module.css";
function Modal({ children, onClickHandler }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClickHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
