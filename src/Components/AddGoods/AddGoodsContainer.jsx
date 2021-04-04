import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirectAndError';
import { addGoods, setIsErrorEndError, setIsPutGoods } from '../../redux/goodsReducer';
import { setActiveWarehouseId } from '../../redux/warehouseReducer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import AddGoods from './AddGoods';

class AddGoodsContainer extends React.Component {
    componentDidMount() {
        this.props.setIsPutGoods(false);
        if (!this.props.warehouseId) {
            this.warehouseId = this.props.match.params.warehouseId;
            this.props.setActiveWarehouseId(this.warehouseId);
        }
    }
    render() {
        if (this.props.isError) {
            return (
                <div>
                    <ErrorMessage
                        error={this.props.error}
                        setIsErrorEndError={this.props.setIsErrorEndError}
                    />
                    <AddGoods {...this.props} />
                </div>
            )
        }
        return (
            <AddGoods {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isPutGoods: state.goods.isPutGoods,
        error: state.goods.error,
        isError: state.goods.isError,
        isLoading: state.goods.isLoading,
        warehouseId: state.warehouse.activeWarehouseId
    };
}

export default compose(
    connect(mapStateToProps, { addGoods, setIsPutGoods, setIsErrorEndError, setActiveWarehouseId }),
    withRouter,
    withAuthRedirect
)(AddGoodsContainer);

