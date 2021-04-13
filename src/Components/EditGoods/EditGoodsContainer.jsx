import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirectAndError';
import { editGoods, getGoods, setIsEditGoods, setIsErrorEndError } from '../../redux/goodsReducer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';
import EditGoods from './EditGoods';


class EditGoodsContainer extends React.Component {
    componentDidMount() {
        let goodsId = this.props.match.params.goodsId;
        this.props.getGoods(goodsId);
    }
    componentWillUnmount() {
        this.props.setIsEditGoods(false);
    }
    render() {
        if (this.props.isLoading) {
            return (
                <Preloader />
            )
        }
        if (this.props.isEditGoods) {
            return <Redirect to={`/warehouse/${this.props.warehouseId}/home`} />
        }
        if (this.props.isError) {
            return <div>
                <ErrorMessage
                    error={this.props.error}
                    setIsErrorEndError={this.props.setIsErrorEndError}
                />
            </div>
        }
        if (!this.props.goods) {
            return <div></div>
        }
        return (
            <EditGoods
                goods={this.props.goods}
                isEditGoods={this.props.isEditGoods}
                setIsEditGoods={this.props.setIsEditGoods}
                editGoods={this.props.editGoods}
                isLoading={this.props.isLoading}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods.goodsEdit,
        isEditGoods: state.goods.isEditGoods,
        error: state.goods.error,
        isError: state.goods.isError,
        isLoading: state.goods.isLoading,
        warehouseId: state.warehouse.warehouseId
    }
}

export default compose(
    connect(mapStateToProps, { getGoods, setIsEditGoods, editGoods, setIsErrorEndError }),
    withRouter,
    withAuthRedirect
)(EditGoodsContainer);


