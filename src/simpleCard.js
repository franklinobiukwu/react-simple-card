import { Title, Description, CardImage } from "./cardComponents";
import "./simpleCard.css";

function SimpleCard(props) {
  return (
    <>
      <div className="cardWrapper">
        <CardImage imgSrc={props.imgSrc} />
        <div id="textContent">
          <Title title={props.title} />
          <div id="desc">
            <Description text={props.description} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleCard;
