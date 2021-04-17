import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router'
import { login } from '../../redux/appReducer'
import { setError } from '../../redux/errorReducer'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Login from './Login'

const LoginContainer = ({ isLoading, error, isAuth, login, setError }) => {

    if (error.isError) {
        return (
            <>
                <ErrorMessage error={error} setError={setError} />
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
        error: state.error.error,
        isLoading: state.app.isLoading
    }
}

export default withRouter(connect(mapStateToProps, { login, setError })(LoginContainer));
