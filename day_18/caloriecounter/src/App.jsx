import "./App.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="food">{props.food}</h1>
      <h2 className="desc">You have consumed {props.calorie} cals today</h2>
      {props.calorie > 180 ? (
        <h3>
          It Contains too much calories. Please don't eat much else you will
          swell like ballon.
        </h3>
      ) : (
        <h3>It doesn't have much calories you can eat as much as you want.</h3>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Calories Counter</h1>
      <div className="container">
        <Card food="Pizza" calorie="56" />
        <Card food="Burger" calorie="69" />
        <Card food="Coke" calorie="500" />
        <Card food="Browne" calorie="190" />
        <Card food="Fried Rice" calorie="90" />
        <Card food="Lassania" calorie="200" />
        <Card food="Pani Puri" calorie="10" />
      </div>
    </div>
  );
}

export default App;
