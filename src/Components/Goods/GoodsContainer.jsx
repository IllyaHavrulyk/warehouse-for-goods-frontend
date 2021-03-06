import React from 'react'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { deleteGoods, requestGoods, setIsErrorEndError, setIsLoading } from '../../redux/goodsReducer';
import { setGoods } from '../../redux/viewReducer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

import Goods from './Goods';

class GoodsContainer extends React.Component {
    componentDidMount() {
        this.props.requestGoods();
    }

    setGoodsView(goods) {
        this.props.setGoods(goods);
        this.props.history.push(`/view/${goods.id}`);
    }
    render() {
        if (this.props.isLoading) {
            return (
                <Preloader />
            )
        }
        if (this.props.isError) {
            return (
                <div>
                    <ErrorMessage error={this.props.error} setIsErrorEndError={this.props.setIsErrorEndError} />
                    <Goods {...this.props} setGoodsView={this.setGoodsView.bind(this)} />
                </div>
            )
        }
        return (
            <Goods {...this.props} setGoodsView={this.setGoodsView.bind(this)} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods.goods,
        isLoading: state.goods.isLoading,
        isError: state.goods.isError,
        error: state.goods.error
    }
}

export default compose(
    connect(mapStateToProps, {
        requestGoods,
        deleteGoods,
        setIsErrorEndError,
        setGoods
    }),
    withRouter
)(GoodsContainer);