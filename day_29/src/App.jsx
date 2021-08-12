import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import { useSelector } from "react-redux";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  // `https://api.weatherapi.com/v1/current.json?key=3a81ceec694b4589a6791432212707&q=${place}`
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <ToggleTheme />
      <Form />
      <WeatherCard />
    </div>
  );
}

export default App;
