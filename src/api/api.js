import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://export.alt-test.ru/',
});

export const demoFormAPI = {
  getFormData() {
    return axios.all([
      instance.get('api/v1/public/user_category/input_list'),
      instance.get('api/v1/public/country/input_list'),
      instance.get('api/v1/public/lang/input_list'),
      instance.get('api/v1/public/industry/input_list')
    ])
      .then(axios.spread((...responses) => {
        return {
          categories: responses[0].data.data,
          countries: responses[1].data.data,
          languages: responses[2].data.data,
          industries: responses[3].data.data
        };
      }))
      .catch((e) => {
        console.log('error:', e)
      });
  },

  submitForm(dataForm) {
    const data = {
      company_name: dataForm.company_name,
      corporate_email: dataForm.corporate_email,
      country: dataForm.markets.map(item => item.value),
      industry: dataForm.industry.map(item => item.value),
      lang: dataForm.lang,
      name: dataForm.name,
      position: dataForm.position,
      surname: dataForm.surname,
      user_category: dataForm.user_category,
      user_country: dataForm.user_country
    }

    return instance.post('api/v1/public/auth/registration_demo', { data });
  },
}