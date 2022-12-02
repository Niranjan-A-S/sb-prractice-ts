import "./card.css";

interface ICard {
  image: string;
  name: string;
  age: number;
}

interface ICardProps {
  card: ICard;
}

export const Card = (props: ICardProps) => {
  const { age, image, name } = props.card;

  return (
    <div className="card">
      <img src={image} alt="card-img" />
      <strong children={`Name : ${name}`} />
      <i children={`${age} years`} />
    </div>
  );
};
