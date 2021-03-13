import React from 'react'
import { Field, Form } from 'react-final-form';
import { Input } from '../common/FormControls/FormsControls';
import { Required } from '../utils/validators/validators';
import style from "./Login.module.css";
const Login = ({ login }) => {
    const onSubmit = (userData) => {
        login(userData);
    }
    return (
        <div>
            <LoginFrom onSubmit={onSubmit} />
        </div>
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
                        <button>Auth</button>
                    </div>
                </form>
            )}
        </Form>
    )
}
