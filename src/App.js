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
import WarehousesContainer from "./Components/Warehouses/WarehousesContainer";

import StatsContainer from './Components/Stats/StatsContainer';
import Footer from "./Components/Footer/Footer";

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
        <Route exact path="/home">
          <WarehousesContainer />
        </Route>
        <Route path="/warehouse/:warehouseId/home">
          <GoodsContainer />
        </Route>
        <Route path="/warehouse/:warehouseId/add">
          <AddGoodsContainer />
        </Route>
        <Route path="/warehouse/:warehouseId/edit/:goodsId?">
          <EditGoodsContainer />
        </Route>
        <Route path="/warehouse/:warehouseId/view/:goodsId?">
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
        <Footer />
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


