import React from 'react'
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import { Input, TextArea } from '../common/FormControls/FormsControls';
import { Required } from '../utils/validators/validators';
import style from './EditGoods.module.css';

const EditGoods = ({ goods, isEditGoods, editGoods }) => {
    const onSubmit = (value) => {
        value.id = goods.id
        editGoods(value);
    }
    if (isEditGoods) {
        return <Redirect to="/home" />
    }
    return (
        <div>
            <EditGoodsForm onSubmit={onSubmit} goods={goods} />
        </div>
    )
}

export default EditGoods;

const EditGoodsForm = ({ onSubmit, goods }) => {
    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={style.box} onSubmit={handleSubmit}>
                    <div className={style.nameForm}>
                        <h1>Goods</h1>
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="name"
                            component={Input}
                            placeholder="Name goods"
                            initialValue={goods.name}
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="price"
                            component={Input}
                            placeholder="Price"
                            initialValue={goods.price}
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="required"
                            component={Input}
                            placeholder="Required"
                            initialValue={goods.required}
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="description"
                            component={TextArea}
                            placeholder="description"
                            initialValue={goods.description}
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="img_url"
                            component={Input}
                            placeholder="Enter url address"
                            initialValue={goods.img_url}
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addButton}>
                        <button>Edit</button>
                    </div>
                </form>
            )}
        </Form>
    )
}