function Title() {
  return (
    <>
      <h2 className="cardTitle">A Title</h2>
    </>
  );
}

class Description {
  constructor(description) {
    this.description = "The description goes here.";
  }
}

function cardImage() {
  return (
    <>
      <div className="imgWrapper">
        <img src="#" alt="goofStuff" />
      </div>
    </>
  );
}

export { Title, Description, cardImage };
