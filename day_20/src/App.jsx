import "./App.css";
import React, { useState } from "react";

const foods = [
  ["pizza", 56],
  ["Burger", 69],
  ["Coke", 500],
  ["Browne", 190],
  ["Fried Rice", 90],
  ["Lassania", 200],
  ["Pani Puri", 10],
];

const Cards = () => {
  const [food, setFood] = useState(foods);
  return (
    <div className="cards">
      {food.length !== 0 ? (
        food.map((item, index) => {
          return (
            <div className="card">
              <h1 className="food">{item[0]}</h1>
              <h2 className="desc">You have consumed {item[1]} cals today</h2>
              <button
                className="delete"
                onClick={() => {
                  const filteredCard = food.filter((e, i) => i !== index);
                  setFood(filteredCard);
                }}
              >
                Delete
              </button>
              {item[1] > 180 ? (
                <h3>
                  It Contains too much calories. Please don't eat much else you
                  will swell like ballon.
                </h3>
              ) : (
                <h3>
                  It doesn't have much calories you can eat as much as you want.
                </h3>
              )}
            </div>
          );
        })
      ) : (
        <div>No Food</div>
      )}
    </div>

    // <div className="card">
    //   <h1 className="food">{props.food}</h1>
    //   <h2 className="desc">You have consumed {props.calorie} cals today</h2>
    //   <button className="delete">Delete</button>
    //   {props.calorie > 180 ? (
    //     <h3>
    //       It Contains too much calories. Please don't eat much else you will
    //       swell like ballon.
    //     </h3>
    //   ) : (
    //     <h3>It doesn't have much calories you can eat as much as you want.</h3>
    //   )}
    // </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Calories Counter</h1>
      <div className="container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
