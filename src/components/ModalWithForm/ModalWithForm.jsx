import "./ModalWithForm.css";
import ModalCloseX from "../../assets/close-btn.svg";

function ModalWithForm({
  children,
  btnTxt,
  titleTxt,
  activeModal,
  onCloseModalClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title"> {titleTxt}</h2>
        <button
          onClick={onCloseModalClick}
          type="button"
          className="modal__close-btn"
        >
          <img src={ModalCloseX} alt="modalClose" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-btn">
            {btnTxt}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
