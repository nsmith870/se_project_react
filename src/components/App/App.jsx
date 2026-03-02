import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import Footer from "../Footer/Footer";
import { getCurrentWeather, filterWeatherData } from "../../utils/weatherApi";
import Api from "../../utils/api";
import { coordinates, apiKey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnit";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const addOnBtnClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItemSubmitBtn = (data) => {
    Api.addItem({
      name: data.name,
      imageUrl: data.link,
      weather: data.weatherType,
    })
      .then((newItem) => {
        setClothingItems((prev) => [newItem, ...prev]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleDeleteClick = () => {
    setActiveModal("delete");
  };

  const handleConfirmDelete = () => {
    const id = selectedCard?._id || selectedCard?.id;
    Api.deleteItem(id)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((item) => (item._id || item.id) !== id),
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    Api.getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getCurrentWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);
  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="app">
        <div className="app__container">
          <Header addOnBtnClick={addOnBtnClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddItemClick={addOnBtnClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          handleCloseModalClick={closeActiveModal}
          handleAddItemSubmitBtn={onAddItemSubmitBtn}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          handleCloseModalClick={closeActiveModal}
          handleDeleteClick={handleDeleteClick}
        />
        <DeleteModal
          isOpen={activeModal === "delete"}
          handleCloseModalClick={closeActiveModal}
          handleConfirmDelete={handleConfirmDelete}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
