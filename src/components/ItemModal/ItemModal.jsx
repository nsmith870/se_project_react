import "./ItemModal.css";
import closeBtn from "../../assets/close-btn.svg";

function ItemModal({ activeModal, card, handleCloseModalClick, handleDeleteClick }) {
  const isPreviewOpen = activeModal === "preview" && card?.imageUrl;

  return (
    <div className={`modal ${isPreviewOpen ? "modal_opened" : ""}`}>
      {isPreviewOpen && (
        <div className="modal__content modal__content_type_image">
          <button
            onClick={handleCloseModalClick}
            type="button"
            className="modal__close-btn"
          >
            <img src={closeBtn} alt="Close Icon" />
          </button>

          <img
            src={card.imageUrl}
            alt={card.name}
            className="modal__image modal__image_type-preview"
          />

          <div className="modal__foot">
            <div className="modal__foot-row">
              <h2 className="modal__caption">{card.name}</h2>
              <button
                className="modal__delete-btn"
                type="button"
                onClick={handleDeleteClick}
              >
                Delete Item
              </button>
            </div>

            <p className="modal__weather">Weather : {card.weather}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemModal;
