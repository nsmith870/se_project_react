import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItemSubmitBtn, onCloseModalClick }) => {
  const defaultValues = {
    name: "",
    link: "",
    weatherType: "",
  };

  const { values, handleChange } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItemSubmitBtn(values);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      name="add-garment"
      titleTxt="New garment"
      btnTxt="Add Garment"
      onCloseModalClick={onCloseModalClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="link"
          placeholder="Image Url"
          required
          value={values.link}
          onChange={handleChange}
        />
      </label>

      <fieldset className="modal__radio-btns">
        <legend className="modal__radio-txt">Select the Weather Type:</legend>
        <div className="modal__label_type_radio">
          <input
            type="radio"
            id="weatherHot"
            name="weatherType"
            className="modal__radio-input-hot"
            value="hot"
            checked={values.weatherType === "hot"}
            onChange={handleChange}
          />
          <label htmlFor="weatherHot">Hot</label>
        </div>

        <div className="modal__label_type_radio">
          <input
            type="radio"
            id="weatherWarm"
            name="weatherType"
            className="modal__radio-input-warm"
            value="warm"
            checked={values.weatherType === "warm"}
            onChange={handleChange}
          />
          <label htmlFor="weatherWarm">Warm</label>
        </div>

        <div className="modal__label_type_radio">
          <input
            type="radio"
            id="weatherCold"
            name="weatherType"
            className="modal__radio-input-cold"
            value="cold"
            checked={values.weatherType === "cold"}
            onChange={handleChange}
          />
          <label htmlFor="weatherCold">Cold</label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
