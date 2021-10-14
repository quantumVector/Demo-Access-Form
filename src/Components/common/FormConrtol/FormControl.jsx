import React from 'react';
import { useField } from 'formik';
import classes from './FormControl.module.css';

export const MyTextInput = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes[`${size}Wrap`]}>
      <input className={classes.item} {...field} {...props} />
      <label htmlFor={props.id || props.name} className={classes.label}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MySelect = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes[`${size}Wrap`]}>
      <select className={classes.item} {...field} {...props} />
      <label htmlFor={props.id || props.name} className={classes.label}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MyTextArea = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes[`${size}Wrap`]}>
      <textarea className={classes.item + ' ' + classes.areaItem} {...field} {...props} />
      <label htmlFor={props.id || props.name} className={classes.label}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MyCheckbox = ({ children, className = '', ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <input type="checkbox" {...field} {...props} />
      <p className={className}>{children}</p>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};