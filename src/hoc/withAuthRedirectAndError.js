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
        if (!isAuth) {
            return (
                <>
                    {isError && <ErrorMessage error={error} setIsErrorEndError={setIsErrorEndError} />}
                    <Redirect to="/login" />
                </>
            )
        }
        return (
            <>
                { isError && <ErrorMessage error={error} setIsErrorEndError={setIsErrorEndError} />}
                <Component {...restProps} />
            </>
        )
    }
    return connect(mapStateToProps, { setIsErrorEndError })(RedirectComponent);
}

export default withAuthRedirect;