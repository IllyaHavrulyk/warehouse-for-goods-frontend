import React from 'react'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirectAndError';
import { addGoods, deleteFilter, deleteGoods, deleteSearch, editGoods, filterPrice, requestGoods, setIsErrorEndError, setIsLoading } from '../../redux/goodsReducer';
import { setGoods } from '../../redux/viewReducer';
import { setActiveWarehouseId } from '../../redux/warehouseReducer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

import Goods from './Goods';

class GoodsContainer extends React.Component {
    componentDidMount() {
        let warehouseId = this.props.match.params.warehouseId;
        this.props.setActiveWarehouseId(warehouseId);
        if (!this.props.isSearch && !this.props.isFilter) {
            this.props.requestGoods(warehouseId);
        }
    }

    setGoodsView(goods) {
        this.props.setGoods(goods);
        this.props.history.push(`/view/${goods.id}`);
    }

    changeQuantityForGoods = (id, nameAction, quantity, isCreateNewGoods) => {
        if (nameAction === "plus" && isCreateNewGoods) {
            let tempGoods = this.props.goods.find(item => item.id === id);
            this.props.addGoods({
                name: tempGoods.name,
                price: tempGoods.price,
                description: tempGoods.description,
                quantity: quantity,
                imgUrl: tempGoods.imgUrl
            },
                this.props.warehouseId
            );
        }
        else if (nameAction === "plus") {
            let tempGoods = this.props.goods.find(item => item.id === id);
            quantity = Number.parseInt(quantity);
            tempGoods.quantity += quantity;
            this.props.editGoods(tempGoods);
        }
        if (nameAction === "minus") {
            let tempGoods = this.props.goods.find(item => item.id === id);
            tempGoods.quantity -= quantity;
            this.props.editGoods(tempGoods);
        }
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Preloader />
            )
        }
        return (
            <Goods changeQuantityForGoods={this.changeQuantityForGoods} {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods.goods,
        isLoading: state.goods.isLoading,
        isError: state.goods.isError,
        error: state.goods.error,
        isSearch: state.goods.isSearch,
        isFilter: state.goods.isFilter,
        warehouseId: state.warehouse.activeWarehouseId,

    }
}

export default compose(
    connect(mapStateToProps, {
        requestGoods,
        deleteGoods,
        setIsErrorEndError,
        setGoods,
        deleteSearch,
        deleteFilter,
        addGoods,
        editGoods,
        setActiveWarehouseId
    }),
    withRouter,
    withAuthRedirect
)(GoodsContainer);