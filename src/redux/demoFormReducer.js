import { demoFormAPI } from "../api/api";

const SET_CATEGORIES_DATA = 'export.link/demoForm/SET_CATEGORIES_DATA';
const SET_COUNTRIES_DATA = 'export.link/demoForm/SET_COUNTRIES_DATA';
const SET_LANGUAGES_DATA = 'export.link/demoForm/SET_LANGUAGES_DATA';
const SET_INDUSTRIES_DATA = 'export.link/demoForm/SET_INDUSTRIES_DATA';

const initialState = {
  categories: [],
  countries: [],
  languages: [],
  industries: [],
};

const demoFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'export.link/demoForm/SET_CATEGORIES_DATA': {
      return { ...state, ...action.categories };
    }
    case 'export.link/demoForm/SET_COUNTRIES_DATA': {
      return { ...state, ...action.countries };
    }
    case 'export.link/demoForm/SET_LANGUAGES_DATA': {
      return { ...state, ...action.languages };
    }
    case 'export.link/demoForm/SET_INDUSTRIES_DATA': {
      return { ...state, ...action.industries };
    }
    default:
      return state;
  }
}

export const getFormData = () => async (dispatch) => {
  dispatch(getCategoriesData());
  dispatch(getCountriesData());
  dispatch(getLanguagesData());
  dispatch(getIndustriesData());
}

const getCategoriesData = () => async (dispatch) => {
  const response = await demoFormAPI.getCategories();
  if (response.data.resultCode === 0) dispatch(setCategoriesData(response.data));
}

const getCountriesData = () => async (dispatch) => {
  const response = await demoFormAPI.getCountries();
  if (response.data.resultCode === 0) dispatch(setCountriesData(response.data));
}

const getLanguagesData = () => async (dispatch) => {
  const response = await demoFormAPI.getLanguages();
  if (response.data.resultCode === 0) dispatch(setLanguagesData(response.data));
}

const getIndustriesData = () => async (dispatch) => {
  const response = await demoFormAPI.getIndustries();
  if (response.data.resultCode === 0) dispatch(setIndustriesData(response.data));
}

const setCategoriesData = (data) => (
  { type: SET_CATEGORIES_DATA, data }
);

const setCountriesData = (data) => (
  { type: SET_COUNTRIES_DATA, data }
);

const setLanguagesData = (data) => (
  { type: SET_LANGUAGES_DATA, data }
);

const setIndustriesData = (data) => (
  { type: SET_INDUSTRIES_DATA, data }
);

export default demoFormReducer;