import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirectAndError';
import { addGoods, setIsErrorEndError, setIsPutGoods } from '../../redux/goodsReducer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import AddGoods from './AddGoods';

class AddGoodsContainer extends React.Component {
    componentDidMount() {
        this.props.setIsPutGoods(false);
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
        isLoading: state.goods.isLoading
    };
}

export default compose(
    connect(mapStateToProps, { addGoods, setIsPutGoods, setIsErrorEndError }),
    withRouter,
    withAuthRedirect
)(AddGoodsContainer);

