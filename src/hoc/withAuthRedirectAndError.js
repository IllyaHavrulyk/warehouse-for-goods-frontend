import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage'
import { setError } from '../redux/errorReducer'
import { setIsErrorEndError } from '../redux/goodsReducer'

const mapStateToProps = (state) => {
    return {
        isAuth: state.app.isAuth,
        error: state.error.error
    }
}

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const { isAuth, error, setIsErrorEndError, ...restProps } = props;
        if (!isAuth) {
            return (
                <>
                    {error.isError && <ErrorMessage error={error} setError={setError} />}
                    <Redirect to="/login" />
                </>
            )
        }
        return (
            <>
                {error.isError && <ErrorMessage error={error} setError={setError} />}
                <Component {...restProps} />
            </>
        )
    }
    return connect(mapStateToProps, { setError })(RedirectComponent);
}

export default withAuthRedirect;