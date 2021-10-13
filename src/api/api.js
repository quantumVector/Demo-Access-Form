import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://export.alt-test.ru/',
});

export const demoFormAPI = {
  getCategories() {
    return instance.get('api/v1/public/user_category/input_list')
      .then(response => response.data);
  },

  getCountries() {
    return instance.get('api/v1/public/country/input_list')
      .then(response => response.data);
  },

  getLanguages() {
    return instance.get('api/v1/public/lang/input_list')
      .then(response => response.data);
  },

  getIndustries() {
    return instance.get('api/v1/public/industry/input_list')
      .then(response => response.data);
  },

  submitForm(/* data */) {
    return instance.post('api/v1/public/auth/registration_demo', { /* data */ });
  },
}