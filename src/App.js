import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GoodsContainer from "./Components/Goods/GoodsContainer";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Router path="/home">
        <GoodsContainer />
      </Router>
    </div>
  );
}

export default App;
