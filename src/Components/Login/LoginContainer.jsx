import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router'
import { login } from '../../redux/appReducer'
import { setIsErrorEndError } from '../../redux/goodsReducer'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Login from './Login'

const LoginContainer = ({ isLoading, isAuth, login, isError, error, setIsErrorEndError }) => {

    if (isError) {
        return (
            <>
                <ErrorMessage error={error} setIsErrorEndError={setIsErrorEndError} />
                <Login isLoading={isLoading} login={login} />
            </>
        )
    }
    if (isAuth) {
        return <Redirect to="/home" />
    }
    return (
        <Login isLoading={isLoading} login={login} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.app.isAuth,
        isError: state.goods.isError,
        error: state.goods.error,
        isLoading: state.app.isLoading
    }
}

export default withRouter(connect(mapStateToProps, { login, setIsErrorEndError })(LoginContainer));
