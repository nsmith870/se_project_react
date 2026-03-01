import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./UserProfile.css";

export default function UserProfile({ clothingItems, handleCardClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
      />
    </section>
  );
}
