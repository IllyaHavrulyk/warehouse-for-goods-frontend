import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import Header from "./Components/Header/Header";
import { Redirect, Route, withRouter } from 'react-router-dom';
import GoodsContainer from "./Components/Goods/GoodsContainer";
import AddGoodsContainer from "./Components/AddGoods/AddGoodsContainer";
import EditGoodsContainer from "./Components/EditGoods/EditGoodsContainer";
import ViewContainer from "./Components/View/ViewContainer";
import React from "react";
import { connect } from "react-redux";
import { initialApp } from "./redux/appReducer";
import Preloader from "./Components/Preloader/Preloader";
import { compose } from "redux";
import LoginContainer from "./Components/Login/LoginContainer";


class App extends React.Component {
  componentDidMount() {
    this.props.initialApp();
  }
  render() {
    if (this.props.isLoading) {
      return (<Preloader />);
    }
    return (
      <div className="App">
        <Header />
        <Route exact path="/">
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
        <Route path="/view/:goodsId?">
          <ViewContainer />
        </Route>
        <Route path="/login">
          <LoginContainer />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.app.isLoading
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initialApp })
)(App);


