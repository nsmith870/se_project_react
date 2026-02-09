import "./ModalWithForm.css";
import ModalCloseX from "../../assets/close-btn.svg";

function ModalWithForm({
  children,
  btnTxt,
  titleTxt,
  isOpen,
  name,
  onCloseModalClick,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""} modal_type_${name}`}>
      <div className="modal__content">
        <h2 className="modal__title">{titleTxt}</h2>

        <button
          onClick={onCloseModalClick}
          type="button"
          className="modal__close-btn"
        >
          <img src={ModalCloseX} alt="Close modal" />
        </button>

        <form className="modal__form" name={name} onSubmit={onSubmit}>
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
