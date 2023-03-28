import { Title, Description, cardImage } from "./cardComponents";

function simpleCard() {
  return (
    <>
      <div className="cardWrapper">
        <cardImage />
        <Title />
        <Description />
      </div>
    </>
  );
}

export default simpleCard;
