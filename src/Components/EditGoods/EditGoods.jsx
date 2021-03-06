import React from 'react'
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import { Input, TextArea } from '../common/FormControls/FormsControls';
import { Required } from '../utils/validators/validators';
import style from './EditGoods.module.css';

const EditGoods = ({ goods, editGoods, isLoading }) => {
    const onSubmit = (value) => {
        value.id = goods.id
        editGoods(value);
    }
    return (
        <div>
            <EditGoodsForm
                onSubmit={onSubmit}
                goods={goods}
                isLoading={isLoading}
            />
        </div>
    )
}

export default EditGoods;

const EditGoodsForm = ({ onSubmit, goods, isLoading }) => {
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
                            initialValue={goods.quantity}
                            name="quantity"
                            component={Input}
                            placeholder="Enter quantity of products."
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="imgUrl"
                            component={Input}
                            placeholder="Enter url address"
                            initialValue={goods.imgUrl}
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addButton}>
                        <button disabled={isLoading}>Edit</button>
                    </div>
                </form>
            )}
        </Form>
    )
}