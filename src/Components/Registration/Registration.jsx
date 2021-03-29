import React from 'react'
import { Field, Form } from 'react-final-form';
import { Input } from '../common/FormControls/FormsControls';
import { Required } from '../utils/validators/validators';
import style from "./Registration.module.css";

const Registration = ({ registration }) => {
    const onSubmit = (userData) => {
        registration(userData.username, userData.password);
    }
    return (
        <RegistrationFrom onSubmit={onSubmit} />
    )
}

export default Registration;

const RegistrationFrom = ({ onSubmit }) => {
    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={style.box} onSubmit={handleSubmit}>
                    <div className={style.nameForm}>
                        <h1>Registration</h1>
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="username"
                            component={Input}
                            placeholder="login"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="password"
                            component={Input}
                            type="password"
                            placeholder="password"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addButton}>
                        <button>Registration</button>
                    </div>
                </form>
            )}
        </Form>
    )
}
