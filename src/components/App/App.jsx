import { useEffect, useState } from "react";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getCurrentWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer"

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const onAddBtnClick = () => {
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
    getCurrentWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <Header onAddBtnClick={onAddBtnClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        titleTxt="New garment"
        btnTxt="Add garment"
        activeModal={activeModal}
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
            id="image"
            placeholder="Image Url"
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__radio-txt">Select the Weather Type:</legend>

          <label className=" modal__label_type_radio">
            <input type="radio" className="modal__radio-input" /> Hot
          </label>

          <label className=" modal__label_type_radio">
            <input type="radio" className="modal__radio-input" /> Warm
          </label>

          <label className=" modal__label_type_radio">
            <input type="radio" className="modal__radio-input" /> Cold
          </label>
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
