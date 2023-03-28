import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import SimpleCard from "./simpleCard";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SimpleCard
    title="Jollof Space"
    imgSrc="https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16.jpg"
    description="Let’s talk about the heated debate that is Nigeria vs. Ghana Jollof. Both West African countries are known for their tasty take on the classic dish, but there can only be one winner. Nigeria’s Jollof is the clear winner, and not just because I’m a Nigerian. Nigerian Jollof is like a culinary adventure for your taste buds. The smoky flavor, the rich blend of spices, the perfectly cooked rice, it’s like a party in your mouth! Ghanaian Jollof, on the other hand, is like the wallflower of the party. It’s mild in flavor, and while it’s not bad per se, it’s just not as exciting. Plus, Nigerian Jollof has the added bonus of being served with a wider variety of accompaniments, like grilled meat and plantains. So, if you want a party in your mouth, go for Nigerian Jollof. If you want to keep it chill, go for Ghanaian Jollof. But let’s be real, who wants to keep it chill when it comes to food?"
  />
  // <React.StrictMode>
  //   <App />
  //   <simpleCard />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
