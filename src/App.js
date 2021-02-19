import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          axios
            .get("http://localhost:8080/doctors", { withCredentials: true })
            .then((res) => {
              alert("Товар : \n" + res);
            });
        }}
      >
        Взяти товар
      </button>
    </div>
  );
}

export default App;
