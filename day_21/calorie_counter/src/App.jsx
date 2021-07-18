import "./App.css";
import React, { useState } from "react";

const Card = ({ calsT, food, id, itemName, setFoods }) => {
  const [item, setItem] = useState(itemName);
  const [cals, setCals] = useState(calsT);
  const [isEditMode, setEditMode] = useState(false);
  // console.log(food);
  return (
    <div className="card">
      <div className="container">
        {isEditMode ? (
          <>
            <input
              type="text"
              value={item}
              onChange={(e) => {
                setItem(e.target.value);
              }}
            />
            <input
              value={cals}
              type="number"
              onChange={(e) => {
                setCals(e.target.value);
              }}
            ></input>
          </>
        ) : (
          <>
            <h2 className="food">{item}</h2>
            <h3 className="desc">You have consumed {cals} cals today</h3>
            {cals > 180 ? (
              <h3>
                It Contains too much calories. Please don't eat much else you
                will swell like ballon.
              </h3>
            ) : (
              <h3>
                It doesn't have much calories you can eat as much as you want.
              </h3>
            )}
          </>
        )}
      </div>
      <div className="container">
        <button
          className="delete"
          onClick={() => {
            console.log(food);
            console.log(id);
            const filteredCard = food.filter((e, ind) => {
              console.log(ind);
              return ind !== id;
            });
            setFoods(filteredCard);
            console.log(filteredCard);
          }}
        >
          Delete
        </button>
        {isEditMode ? (
          <button
            className="edit"
            onClick={() => {
              // console.log(e);
              let newFoodList = food.map((i, ii) => {
                // console.log(i, ii, id);
                // console.log(item, cals);
                if (ii === id) {
                  return [item, cals];
                } else {
                  return i;
                }
              });
              setFoods(newFoodList);
              setEditMode(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="edit"
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

const Cards = ({ food, setFoods }) => {
  // console.log(food);
  return (
    <div className="cards">
      {food.length !== 0 ? (
        food.map((item, index) => {
          // console.log(item);
          return (
            <Card
              setFoods={setFoods}
              key={index}
              id={index}
              food={food}
              itemName={item[0]}
              calsT={item[1]}
            />
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
  const [food, setFoods] = useState([]);
  const [item, setItem] = useState("");
  const [cal, setCal] = useState(0);
  return (
    <div className="App">
      <h1>Calories Counter</h1>
      <div className="container">
        <form
          className="addItem"
          onSubmit={(e) => {
            e.preventDefault();
            if (item !== " ") {
              setFoods(() => {
                return [...food, [item, cal]];
              });
              setCal(0);
              setItem("");
            }
          }}
        >
          <input
            type="text"
            required
            placeholder="Enter food item name"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter calories"
            required
            value={cal}
            onChange={(e) => {
              setCal(e.target.value);
            }}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>

      <div className="container">
        <Cards food={food} setFoods={setFoods} />
      </div>
    </div>
  );
}

export default App;
