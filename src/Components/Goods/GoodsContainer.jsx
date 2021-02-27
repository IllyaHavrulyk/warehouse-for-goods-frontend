import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { deleteGoods, requestGoods } from '../../redux/goodsReducer';
import Goods from './Goods';

class GoodsContainer extends React.Component {
    componentDidMount() {
        this.props.requestGoods();
    }
    render() {
        if (!this.props.isLoading) {
            return (
                <div></div>
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
        isLoading: state.goods.isLoading
    }
}

export default connect(mapStateToProps, {
    requestGoods,
    deleteGoods
})(GoodsContainer);