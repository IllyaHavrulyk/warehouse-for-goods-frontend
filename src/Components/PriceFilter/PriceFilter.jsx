import React from 'react'
import { Field, Form } from 'react-final-form';
import { Input, InputForFilter } from '../common/FormControls/FormsControls';
import { Required } from '../utils/validators/validators';
import style from './PriceFilter.module.css';

const PriceFilter = ({ onClosePriceFilter, filterPrice }) => {
    const onSubmit = (value) => {
        onClosePriceFilter(true);
        filterPrice(value.minPrice, value.maxPrice);
    }
    return (
        <div className={style.priceFilter}>
            <button onClick={onClosePriceFilter}>close</button>
            <PriceFilterForm onSubmit={onSubmit} />
        </div>
    )
}

const PriceFilterForm = ({ onSubmit }) => {
    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={style.box} onSubmit={handleSubmit}>
                    <div className={style.nameForm}>
                        <h1>Goods</h1>
                    </div>
                    <div className={style.addGoodsField}>
                        <Field
                            name="minPrice"
                            component={InputForFilter}
                            placeholder="min Price"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addGoodsField}>
                        <Field

                            name="maxPrice"
                            component={InputForFilter}
                            placeholder="max Price"
                            validate={values => {
                                return Required(values);
                            }}
                        />
                    </div>
                    <div className={style.addButton}>
                        <button>Filter</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default PriceFilter;
