import Select, { components } from 'react-select';
import classes from './FormControl.module.css';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg className={classes.indicator} width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.80358 0.186218C6.67916 0.0669523 6.51086 9.34599e-06 6.33543 9.34599e-06C6.16 9.34599e-06 6.125 0 6.125 0L3.4834 9.34599e-06L0.875 5.31672e-06C0.875 5.31672e-06 0.839995 9.34599e-06 0.664566 9.34599e-06C0.489137 9.34599e-06 0.320836 0.0669523 0.196421 0.186218C0.134182 0.245746 0.084781 0.316569 0.0510688 0.394602C0.0173566 0.472634 0 0.556331 0 0.640865C0 0.725398 0.0173566 0.809095 0.0510688 0.887128C0.084781 0.96516 0.134182 1.03598 0.196421 1.09551L3.01193 3.81059C3.07366 3.8706 3.14711 3.91824 3.22803 3.95075C3.30894 3.98326 3.39574 4 3.4834 4C3.57106 4 3.65785 3.98326 3.73877 3.95075C3.81969 3.91824 3.89313 3.8706 3.95486 3.81059L6.80358 1.09551C6.86582 1.03598 6.91522 0.96516 6.94893 0.887128C6.98264 0.809095 7 0.725398 7 0.640865C7 0.556331 6.98264 0.472634 6.94893 0.394602C6.91522 0.316569 6.86582 0.245746 6.80358 0.186218Z" fill="#646B7D" />
      </svg>
    </components.DropdownIndicator>
  );
};

export const CustomReactSelect = (props) => {
  const selectStyles = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor: '#F8F9F9',
      borderRadius: '5px',
      minHeight: '56px',
      marginBottom: '20px',
      transition: 'none',
      border: colorControl(state, props.meta),
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: colorControl(state, props.meta),
      }
    })
  }

  const colorControl = (state, meta) => {
    if (state.isFocused) {
      return '2px solid #66aad4';
    } else {
      if (meta.touched && meta.error) return '2px solid #F77F82;'
      return '1px solid #F4F4F6';
    }
  }

  return <Select options={props.option}
    isMulti={props.multi}
    isClearable
    placeholder={<div className={classes.selectPlaceholder}>{props.label}</div>}
    styles={selectStyles}
    components={{ DropdownIndicator, IndicatorSeparator: () => null }}
    onChange={props.onChange}
    onBlur={props.setTouched}
  />
}