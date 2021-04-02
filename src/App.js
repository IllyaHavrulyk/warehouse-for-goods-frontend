import logo from "./logo.svg";
import "./App.css";

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
import HeaderContainer from "./Components/Header/HeaderContainer";
import RegistrationContainer from "./Components/Registration/RegistrationContainer";
import StatsContainer from './Components/Stats/StatsContainer';

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
        {this.props.isAuth && <HeaderContainer />}
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
        <Route path="/stats">
          <StatsContainer />
        </Route>
        <Route path="/registration">
          <RegistrationContainer />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.app.isLoading,
    isAuth: state.app.isAuth
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initialApp })
)(App);


