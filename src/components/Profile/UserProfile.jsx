import ClothingSection from "../ClothesSection/ClothingSection";
import SideBar from "../SideBar/SideBar";
import "./UserProfile.css";

export default function UserProfile({ clothingItems, handleCardClick }) {
  return (
    <section className="userProfile">
      <SideBar />
      <ClothingSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
      />
    </section>
  );
}
