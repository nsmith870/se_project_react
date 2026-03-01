import { useContext } from "react";
import "./TemperatureToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../utils/CurrentTemperatureUnit";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext,
  );

  
  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circle"></span>
      <span
        className={`toggle-switch__txt toggle-switch__txt_F ${
          currentTemperatureUnit === "F" ? "toggle-switch__txt_white" : ""}`}>F</span>
      <span
        className={`toggle-switch__txt toggle-switch__txt_C ${
          currentTemperatureUnit === "C" ? "toggle-switch__txt_white" : ""}`}>C</span>
    </label>
  );
}
