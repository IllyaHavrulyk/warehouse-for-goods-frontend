import React from 'react'
import { connect } from 'react-redux';
import { logout, searchGoods } from '../../redux/goodsReducer';
import Header from './Header';

const HeaderContainer = (props) => {
    return (
        <Header searchGoods={props.searchGoods} logout={props.logout} />
    )
}

const mapDispatchToProps = (state) => {
    return {}
}

export default connect(mapDispatchToProps, { searchGoods, logout })(HeaderContainer);