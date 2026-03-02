import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({clothingItems,handleCardClick}) {
  return (
    <section className="clothing-section">
        <div className="clothing-section__row">
            <p className="clothing-section__txt">Your items</p>
            <button type="button" className="clothing-section__btn">
                + Add New
            </button>
        </div>

        <ul className="clothing-section__list">
            {(clothingItems || []).map((item)=>(
                <ItemCard
                    key={item._id}
                    item={item}
                    onCardClick={handleCardClick}
                />
            ))}
        </ul>
    </section>
  );
}
