import React from 'react'
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import { Input, TextArea } from '../common/FormControls/FormsControls';
import { IsInteger, Required } from '../utils/validators/validators';
import style from './AddGoods.module.css';

const AddGoods = ({ addGoods, isPutGoods, isLoading, warehouseId }) => {
    const onSubmit = (value) => {
        addGoods(value, warehouseId);
    }
    if (isPutGoods) {
        return <Redirect to={`/warehouse/${warehouseId}/home`} />
    }
    return (
        <div>
            <AddGoodsForm onSubmit={onSubmit} isLoading={isLoading} />
        </div>
    )
}

export default AddGoods;

const AddGoodsForm = ({ onSubmit, isLoading }) => {
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
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            type="number"
                            name="price"
                            component={Input}
                            placeholder="Price"
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
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            type="number"
                            name="quantity"
                            component={Input}
                            placeholder="Enter quantity of products."
                            validate={values => {
                                return IsInteger(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field

                            name="imgUrl"
                            component={Input}
                            placeholder="Enter url address"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addButton}>
                        <button disabled={isLoading}>Add</button>
                    </div>
                </form>
            )}
        </Form>
    )
}