import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getGoods, setError, setIsLoading } from '../../redux/viewReducer';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';
import View from './View'

class ViewContainer extends React.Component {

    componentDidMount() {
        let goodsId = this.props.match.params.goodsId;
        this.props.getGoods(goodsId);
    }

    render() {
        if (this.props.isLoading) {
            return <Preloader />
        }
        if (this.props.isError) {
            return <ErrorMessage
                setIsErrorEndError={this.props.setError}
                error={this.props.error}
            />
        }
        if (!this.props.goods) {
            return <div></div>
        }
        return (
            <div>
                <View {...this.props} />
            </div>
        );
    }
}

const mapDispatchToProps = (state) => {
    return {
        goods: state.view.goods,
        error: state.view.error,
        isError: state.view.isError,
        isLoading: state.view.isLoading
    }
}

export default compose(
    connect(mapDispatchToProps, { getGoods, setIsLoading, setError }),
    withRouter
)(ViewContainer)



