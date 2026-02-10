import { useEffect, useState } from "react";
import "./App.css";
import { coordinates, apiKey, defaultClothingItems } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getCurrentWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });


   const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const addOnBtnClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getCurrentWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <Header addOnBtnClick={addOnBtnClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick}  clothingItems={clothingItems} />
        <Footer />
      </div>
      <ModalWithForm
        titleTxt="New garment"
        btnTxt="Add garment"
        name="add-garment"
        isOpen={activeModal === "add-garment"}
        onCloseModalClick={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image Url"
          />
        </label>


        <fieldset className="modal__radio-btns">

          <legend className="modal__radio-txt">Select the Weather Type:</legend>
          <div className="modal__label_type_radio">
            
            <input
              type="radio"
              id="weather-hot"
              name="weather"
              value="hot"
              className="modal__radio-input-hot"
            />
            <label htmlFor="weather-hot">Hot</label>
          </div>

          <div className="modal__label_type_radio">
            <input
              type="radio"
              id="weather-warm"
              name="weather"
              value="warm"
              className="modal__radio-input-warm"
            />
            <label htmlFor="weather-warm">Warm</label>
          </div>

          <div className="modal__label_type_radio">
            <input
              type="radio"
              id="weather-cold"
              name="weather"
              value="cold"
              className="modal__radio-input-cold"
            />
            <label htmlFor="weather-cold">Cold</label>
          </div>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onCloseModalClick={closeActiveModal}
      />
    </div>
  );
}

export default App;
