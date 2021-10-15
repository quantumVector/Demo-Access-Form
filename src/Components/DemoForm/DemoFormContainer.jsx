import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFormData, submitForm } from '../../redux/demoFormReducer';
import DemoForm from './DemoForm';

const mapStateToProps = (state) => ({
  categories: state.demoForm.categories,
  countries: state.demoForm.countries,
  languages: state.demoForm.languages,
  industries: state.demoForm.industries,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getFormData: () => {
      dispatch(getFormData());
    },
    submitForm: (data) => {
      dispatch(submitForm(data));
    }
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(DemoForm);