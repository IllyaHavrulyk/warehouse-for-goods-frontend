import React from 'react'
import style from './FormsControls.module.css';

export const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControls + " " + (hasError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span className={style.warning}>{meta.error}</span>}
        </div >
    );
}

export const TextArea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl{...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl{...props}><input {...input} {...restProps} /></FormControl>
}