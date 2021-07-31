import "./App.css";
import useFetch from "./Hooks/useFetch";

function App() {
  const [quote] = useFetch("https://animechan.vercel.app/api/random");

  return (
    <div className="App">
      <div className="Container">
        <h1>{quote.quote}</h1>
        <h2>{quote.character}</h2>
        <h3>{quote.anime}</h3>
        <button
          className="btn"
          onClick={() => {
            document.location.reload();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
