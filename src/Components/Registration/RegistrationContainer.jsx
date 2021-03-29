import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { registration } from '../../redux/registrationReducer';
import Registration from './Registration';

const RegistrationContainer = ({ isRegistration, registration }) => {
    if (isRegistration) {
        return <Redirect to="/home" />
    }
    return (
        <Registration registration={registration} />
    )
}

const mapDispatchToProps = (state) => {
    return {
        isRegistration: state.registration.isRegistration
    }
}


export default connect(mapDispatchToProps, { registration })(RegistrationContainer);
