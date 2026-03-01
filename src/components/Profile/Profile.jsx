import ClothingSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./UserProfile.css";

export default function UserProfile({ clothingItems, handleCardClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothingSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
      />
    </section>
  );
}
