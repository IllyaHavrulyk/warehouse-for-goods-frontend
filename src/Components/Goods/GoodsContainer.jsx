import React from 'react'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirectAndError';
import { deleteFilter, deleteGoods, deleteSearch, filterPrice, requestGoods, setIsErrorEndError, setIsLoading } from '../../redux/goodsReducer';
import { setGoods } from '../../redux/viewReducer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

import Goods from './Goods';

class GoodsContainer extends React.Component {
    componentDidMount() {
        if (!this.props.isSearch && !this.props.isFilter) {
            this.props.requestGoods();
        }
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
        return (
            <Goods {...this.props} />
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
        isFilter: state.goods.isFilter
    }
}

export default compose(
    connect(mapStateToProps, {
        requestGoods,
        deleteGoods,
        setIsErrorEndError,
        setGoods,
        deleteSearch,
        deleteFilter
    }),
    withRouter,
    withAuthRedirect
)(GoodsContainer);