import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import UserProfile from "../UserProfile/UserProfile";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import Footer from "../Footer/Footer";
import { getCurrentWeather, filterWeatherData } from "../../utils/weatherApi";
import Api from "../../utils/api";
import { coordinates, apiKey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../Context/CurrentTemperatureUnit";

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
    Api
      .addItem({
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
          prev.filter((item) => (item._id || item.id) !== id)
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
                <UserProfile
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onCloseModalClick={closeActiveModal}
          onAddItemSubmitBtn={onAddItemSubmitBtn}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onCloseModalClick={closeActiveModal}
          onDeleteClick={handleDeleteClick}
        />
        <DeleteModal
          isOpen={activeModal === "delete"}
          onClose={closeActiveModal}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
