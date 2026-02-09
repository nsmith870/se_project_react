import "./ItemModal.css";
import ModalCloseX from "../../assets/close-btn.svg";

function ItemModal({ activeModal, card, onCloseModalClick }) {
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onCloseModalClick}
          type="button"
          className="modal__close-btn"
        >
          <img src={ModalCloseX} alt="modalClose" />
        </button>
        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather : {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
