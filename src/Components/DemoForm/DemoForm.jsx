import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import classes from './DemoForm.module.css';
import { MyCheckbox, MySelect, MyTextArea, MyTextInput } from '../common/FormConrtol/FormControl';
import { formValidationSchema } from '../../utils/validators';

const DemoForm = ({ categories, countries, languages, industries, getFormData, submitForm }) => {
  useEffect(() => getFormData(), []);

  const categoriesOptions = categories.map(item => ({ value: item.id, label: item.name }));
  const countriesOptions = countries.map(item => ({ value: item.id, label: item.name }));
  const languagesOptions = languages.map(item => ({ value: item.id, label: item.name }));
  const industriesOptions = industries.map(item => ({ value: item.id, label: item.name }));

  return (
    <section className={classes.demoForm}>
      <h1 className={classes.sectionTitle}>Запросить демо-доступ</h1>
      <p className={classes.discription}>Доступ к платформе возможен исключительно для представителей юридических лиц или индивидуальных предпринимателей</p>
      <div className={classes.formWrap}>
        <h2 className={classes.formTitle}>Заполните контактные данные</h2>
        <Formik
          initialValues={{
            company_name: '',
            user_category: '',
            user_country: '',
            name: '',
            surname: '',
            position: '',
            corporate_email: '',
            markets: Array(0),
            lang: '',
            industry: Array(0),
            message: '',
            check: false
          }}
          validationSchema={formValidationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            submitForm(data);
            setSubmitting(false);
          }}
        >{({ isSubmitting }) => (
          <Form className={classes.form}>
            <h3 className={classes.subtitle}>Юридическое лицо</h3>
            <div className={classes.block}>
              <MyTextInput label="Название юридического лица*" size="large" name="company_name" type="text" />
              <MySelect label="Категория*" size="short" option={categoriesOptions} name="user_category" />
              <MySelect label="Страна*" size="short" option={countriesOptions} name="user_country" />
            </div>
            <h3 className={classes.subtitle}>Представитель юридического лица</h3>
            <div className={classes.block}>
              <MyTextInput label="Имя*" size="short" name="name" type="text" />
              <MyTextInput label="Фамилия*" size="short" name="surname" type="text" />
              <MyTextInput label="Должность*" size="short" name="position" type="text" />
              <MyTextInput label="Ваш корпоративный e-mail*" size="short" name="corporate_email" type="email" />
            </div>
            <h3 className={classes.subtitle}>Профессиональные интересы</h3>
            <div className={classes.block}>
              <MySelect label="Целевые рынки*" size="short" option={countriesOptions} multi="true" name="markets" />
              <MySelect label="Предпочтительный язык*" size="short" option={languagesOptions} name="lang" />
              <MySelect label="Интересующие отрасли*" size="large" option={industriesOptions} multi="true" name="industry" />
              <MyTextArea label="Сообщение" size="large" name="message" />
            </div>
            <div className={classes.block}>
              <MyCheckbox className={classes.confirmation} name="check">
                Подтверждаю, что являюсь уполномоченным представителем указанного юридического лица или индивидуального предпринимателя
              </MyCheckbox>
            </div>
            <div className={classes.line}></div>
            <div className={classes.block}>
              <div className={classes.shortWrap}>
                <p className={classes.conditions}>Нажимая кнопку “Запросить демо-доступ” вы принимаете <a href="#">пользовательское соглашение</a> и согласны с <a href="#">правилами использования и обработки персональных данных</a></p>
              </div>
              <div className={classes.shortWrap}>
                <button type="submit" className={classes.btn} disabled={isSubmitting}>Отправить заявку</button>
              </div>
            </div>
          </Form>
        )}
        </Formik>
      </div>
    </section>
  )
}

export default DemoForm;
