import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { editGoods, getGoods, setIsEditGoods } from '../../redux/goodsReducer';
import EditGoods from './EditGoods';


class EditGoodsContainer extends React.Component {
    componentDidMount() {
        let goodsId = this.props.match.params.goodsId;
        this.props.getGoods(goodsId);
        this.props.setIsEditGoods(false);
    }
    render() {
        if (!this.props.goods) {
            return <div></div>
        }
        return (
            <EditGoods goods={this.props.goods} isEditGoods={this.props.isEditGoods} editGoods={this.props.editGoods} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods.goodsEdit,
        isEditGoods: state.goods.isEditGoods
    }
}

export default compose(
    connect(mapStateToProps, { getGoods, setIsEditGoods, editGoods }),
    withRouter
)(EditGoodsContainer);


