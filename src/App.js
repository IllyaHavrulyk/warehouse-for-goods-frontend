import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import Header from "./Components/Header/Header";
import { Redirect, Route } from 'react-router-dom';
import GoodsContainer from "./Components/Goods/GoodsContainer";
import AddGoodsContainer from "./Components/AddGoods/AddGoodsContainer";
import EditGoodsContainer from "./Components/EditGoods/EditGoodsContainer";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <GoodsContainer />
      </Route>
      <Route path="/add">
        <AddGoodsContainer />
      </Route>
      <Route path="/edit/:goodsId?">
        <EditGoodsContainer />
      </Route>
    </div>
  );
}

export default App;
