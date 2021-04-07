import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../redux/appReducer';
import { searchGoods } from '../../redux/goodsReducer';
import Header from './Header';

const HeaderContainer = (props) => {
    return (
        <Header searchGoods={props.searchGoods} logout={props.logout} warehouseId={props.warehouseId} />
    )
}

const mapDispatchToProps = (state) => {
    return {
        warehouseId: state.warehouse.activeWarehouseId,
    }
}

export default connect(mapDispatchToProps, { searchGoods, logout })(HeaderContainer);