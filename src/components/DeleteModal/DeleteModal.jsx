import "./DeleteModal.css";
import "../ModalWithForm/ModalWithForm.css"
import closeBtn from "../../assets/close-btn.svg";

function DeleteModal({ isOpen, onClose, onConfirm }) {
  return (
    <div
      className={`modal  ${
        isOpen ? "modal_opened" : ""
      } modal_type_delete`}
    >
      <div className="modal__content__content modal__content_content_confirmation ">

        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
        >
          <img src={closeBtn} alt="Close modal" />
        </button>

        <h2 className="modal__confirmation-title">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </h2>

        <div className="modal__btns">
          <button
            type="button"
            className="modal__confirm-btn"
            onClick={onConfirm}
          >
            Yes, delete item
          </button>

          <button
            type="button"
            className="modal__cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}

export default DeleteModal;