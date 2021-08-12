import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  const [place, setPlace] = useState("mumbai");
  const [placeData, setPlaceData] = useState("");
  const updatePlaceData = () => {
    // my key is not working
    // b6723b06b49c460da65120105211208
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=3a81ceec694b4589a6791432212707&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  };
  useEffect(() => {});
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={updatePlaceData}>
              Submit
            </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="temp">{placeData.current.temp_c}°</div>
                  <div className="desc">{placeData.current.condition.text}</div>
                  <div className="place">{placeData.location.name}</div>
                  <div className="container">
                    <div className="row php">
                      <div className="col">
                        <div className="title">Wind Now</div>
                        <div className="data">
                          {placeData.current.wind_kph}
                          <span className="unit">KM</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {placeData.current.humidity}
                          <span className="unit">KM</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Precipitation</div>
                        <div className="data">
                          {placeData.current.precip_in}
                          <span className="unit">KM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2>Place Not found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
