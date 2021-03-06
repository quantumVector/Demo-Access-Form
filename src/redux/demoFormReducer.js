import { demoFormAPI } from "../api/api";

const SET_FORM_DATA = 'export.link/demoForm/SET_FORM_DATA';

const initialState = {
  categories: [],
  countries: [],
  languages: [],
  industries: [],
};

const demoFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'export.link/demoForm/SET_FORM_DATA': {
      return {
        ...state,
        categories: action.data.categories,
        countries: action.data.countries,
        languages: action.data.languages,
        industries: action.data.industries,
      };
    }
    default:
      return state;
  }
}

export const getFormData = () => async (dispatch) => {
  const response = await demoFormAPI.getFormData();
  if (response) dispatch(setFormData(response));
}

export const submitForm = (dataForm) => async (dispatch) => {
  try {
    const response = await demoFormAPI.submitForm(dataForm);
    if (response) console.log('success');
  } catch (error) {
    console.log(error);
  }
}

const setFormData = (data) => (
  { type: SET_FORM_DATA, data }
)

export default demoFormReducer;