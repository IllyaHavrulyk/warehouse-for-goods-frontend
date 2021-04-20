import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setError } from '../../redux/errorReducer';
import { registration } from '../../redux/registrationReducer';
import Registration from './Registration';
import ErrorMessages from '../ErrorMessage/ErrorMessage';

const RegistrationContainer = ({ isRegistration, registration, setError, error }) => {
    if (isRegistration) {
        return <Redirect to="/home" />
    }
    return (
        <>
            {error.isError &&
                <ErrorMessages error={error} setError={setError} />
            }
            <Registration registration={registration} />

        </>
    )
}

const mapDispatchToProps = (state) => {
    return {
        isRegistration: state.registration.isRegistration,
        error: state.error.error
    }
}

export default connect(mapDispatchToProps, { registration, setError })(RegistrationContainer);
