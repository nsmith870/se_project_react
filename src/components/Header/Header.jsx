import "./Header.css";
import logo from "../../assets/wtwr-logo.svg";
import avatar from "../../assets/wtwr-avatarImage.svg";

function Header({ onAddBtnClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} className="header__logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={onAddBtnClick}
        type="button"
        className="header__clothes-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrance Tegegne</p>
        <img src={avatar} alt="Terrance Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}
export default Header;
