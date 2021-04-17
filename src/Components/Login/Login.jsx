import React from 'react'
import { Button } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { Input } from '../common/FormControls/FormsControls';
import { PasswordOrLogin, Required } from '../utils/validators/validators';
import { NavLink } from 'react-router-dom';
import style from "./Login.module.css";
const Login = ({ login, isLoading }) => {
    const onSubmit = (userData) => {
        login(userData);
    }
    return (
        <>
            <div>
                <LoginFrom onSubmit={onSubmit} />
            </div>
            <div className={style.registrationButton}>
                <NavLink to="/registration">
                    <Button disabled={isLoading}>Registration</Button>
                </NavLink>
            </div>
        </>
    )
}
export default Login;
const LoginFrom = ({ onSubmit }) => {
    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={style.box} onSubmit={handleSubmit}>
                    <div className={style.nameForm}>
                        <h1>Login</h1>
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="username"
                            component={Input}
                            placeholder="login"
                            validate={values => {
                                return PasswordOrLogin(values);
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
                                return PasswordOrLogin(values);
                            }}
                        />
                    </div>
                    <div className={style.addButton}>
                        <button>Auth</button>
                    </div>
                </form>
            )}
        </Form>
    )
}
