import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const cardItemClick = () => {
    onCardClick(cardItemClick);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={() => {
          onCardClick(item);
        }}
        className="card__img"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
