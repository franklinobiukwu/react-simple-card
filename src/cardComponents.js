import React from "react";

// card title
function Title(props) {
  return (
    <>
      <h2 className="cardTitle">{props.title}</h2>
    </>
  );
}

// card description
class Description extends React.Component {
  render() {
    return (
      <>
        <p className="cardDescription">{this.props.text}</p>
      </>
    );
  }
}

// card image
const CardImage = (props) => {
  return (
    <>
      <div className="imgWrapper">
        <img src={props.imgSrc} alt="goodStuff" />
      </div>
    </>
  );
};

// export card components
export { Title, Description, CardImage };
