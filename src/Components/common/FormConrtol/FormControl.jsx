import React from 'react';
import { useField } from 'formik';
import classes from './FormControl.module.css';
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { CustomReactSelect } from './CustomReactSelect';

export const MyTextInput = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes[`${size}Wrap`]}>
      <input className={classes.item + ' ' + (meta.touched && meta.error && classes.fieldError)} placeholder={label} {...field} {...props} />
      {/* <label htmlFor={props.id || props.name} className={classes.label}>{label}</label> */}
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MySelect = ({ label, size, option, multi = false, ...props }) => {
  const [field, meta, { setValue, setTouched }] = useField(props);
  const onChange = (event) => {
    event ? setValue(event.value) : setValue('');
    if (Array.isArray(event)) {
      event ? setValue(event) : setValue('');
    }
  };

  return (
    <div className={classes[`${size}Wrap`]}>
      <CustomReactSelect option={option}
        meta={meta}
        multi={multi}
        label={label}
        onChang={onChange}
        setTouched={setTouched} />
      {/* <label htmlFor={props.id || props.name} className={classes.label}>{label}</label> */}
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MyTextArea = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes[`${size}Wrap`]}>
      <textarea className={classes.item + ' ' + classes.areaItem} placeholder={label} {...field} {...props} />
      {/* <label htmlFor={props.id || props.name} className={classes.label}>{label}</label> */}
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MyCheckbox = ({ children, className = '', ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <FormControlLabel {...field} {...props} control={<Checkbox color="default" size="small" />} />
      <p className={className + ' ' + (meta.touched && meta.error && classes.textError)}>{children}</p>
    </>
  );
};