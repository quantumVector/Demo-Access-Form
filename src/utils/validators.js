import * as yup from "yup";

export const formValidationSchema = yup.object({
  company_name: yup.string().required('Обязательное поле').trim(),
  user_category: yup.string().required('Обязательное поле'),
  user_country: yup.string().required('Обязательное поле'),
  name: yup.string()
    .required('Обязательное поле')
    .max(10, 'Максимальная длинна - 50 символов')
    .trim(),
  surname: yup.string()
    .required('Обязательное поле')
    .max(10, 'Максимальная длинна - 50 символов')
    .trim(),
  position: yup.string().required('Обязательное поле').trim(),
  corporate_email: yup.string()
    .required('Обязательное поле')
    .email('Неправильный email')
    .trim(),
  markets: yup.array().min(1, 'Обязательное поле'),
  lang: yup.string().required('Обязательное поле'),
  industry: yup.array().min(1, 'Обязательное поле'),
  message: yup.string().required('Обязательное поле').trim(),
  check: yup.string().required('Обязательное поле'),
});
