import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router'
import { login } from '../../redux/appReducer'
import Login from './Login'

const LoginContainer = ({ isAuth, login }) => {
    if (isAuth) {
        return <Redirect to="/home" />
    }
    return (
        <Login login={login} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.app.isAuth
    }
}

export default withRouter(connect(mapStateToProps, { login })(LoginContainer));
