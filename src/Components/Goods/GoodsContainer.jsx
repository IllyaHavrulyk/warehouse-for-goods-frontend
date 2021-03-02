import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { deleteGoods, requestGoods, setIsErrorEndError, setIsLoading } from '../../redux/goodsReducer';
import Preloader from '../Preloader/Preloader';

import Goods from './Goods';

class GoodsContainer extends React.Component {
    componentDidMount() {
        this.props.requestGoods();
    }
    render() {
        if (this.props.isLoading) {
            return (
                <Preloader />
            )
        }
        return (
            <div>
                <Goods {...this.props} />
            </div>
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


export default connect(mapStateToProps, {
    requestGoods,
    deleteGoods,
    setIsErrorEndError
})(GoodsContainer);