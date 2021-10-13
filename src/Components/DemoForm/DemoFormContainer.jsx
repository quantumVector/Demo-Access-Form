import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFormData } from '../../redux/demoFormReducer';
import DemoForm from './DemoForm';

const mapStateToProps = (state) => ({
  categories: state.demoForm.categories,
  countries: state.demoForm.countries,
  languages: state.demoForm.countries,
  industries: state.demoForm.industries,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getFormData: () => {
      dispatch(getFormData());
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(DemoForm);