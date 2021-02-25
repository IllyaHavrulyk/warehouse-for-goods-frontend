import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import Header from "./Components/Header/Header";
import { Route } from 'react-router-dom';
import GoodsContainer from "./Components/Goods/GoodsContainer";
import AddGoodsContainer from "./Components/AddGoods/AddGoodsContainer";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/home">
        <GoodsContainer />
      </Route>
      <Route path="/add">
        <AddGoodsContainer />
      </Route>
    </div>
  );
}

export default App;
