import React from 'react'
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import { Input, TextArea } from '../common/FormControls/FormsControls';
import { Required } from '../utils/validators/validators';
import style from './AddGoods.module.css';

const AddGoods = ({ addGoods, isPutGoods, setIsPutGoods }) => {
    const onSubmit = (value) => {
        addGoods(value);
    }
    if (isPutGoods) {
        return <Redirect to="/home" />
    }
    return (
        <div>
            <AddGoodsForm onSubmit={onSubmit} />
        </div>
    )
}

export default AddGoods;

const AddGoodsForm = ({ onSubmit }) => {
    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={style.box} onSubmit={handleSubmit}>
                    <div className={style.nameForm}>
                        <h1>Goods</h1>
                    </div>
                    <div>
                        <Field
                            name="name"
                            component={Input}
                            placeholder="Name goods"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div>
                        <Field
                            name="price"
                            component={Input}
                            placeholder="Price"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div>
                        <Field
                            name="required"
                            component={Input}
                            placeholder="Required"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div>
                        <Field
                            name="description"
                            component={TextArea}
                            placeholder="description"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div>
                        <Field
                            name="img_url"
                            component={Input}
                            placeholder="Enter url address"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addButton}>
                        <button>Add</button>
                    </div>
                </form>
            )}
        </Form>
    )
}