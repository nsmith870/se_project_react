import "./ItemCard.css";

function ItemCard({ item, handleCardClick }) {
  const cardItemClick = () => {
    handleCardClick(cardItemClick);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={() => {
          handleCardClick(item);
        }}
        className="card__img"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
