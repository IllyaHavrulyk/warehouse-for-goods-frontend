import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage'
import { setIsErrorEndError } from '../redux/goodsReducer'

const mapStateToProps = (state) => {
    return {
        isAuth: state.app.isAuth,
        isError: state.goods.isError,
        error: state.goods.error,
    }
}

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const { isAuth, isError, error, setIsErrorEndError, ...restProps } = props;
        if (isError) {
            return (
                <div>
                    <Component {...restProps} />
                    <ErrorMessage error={error} setIsErrorEndError={setIsErrorEndError} />
                </div>
            )
        }
        if (!isAuth) {
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <Component {...restProps} />
        )
    }
    return connect(mapStateToProps, { setIsErrorEndError })(RedirectComponent);
}

export default withAuthRedirect;