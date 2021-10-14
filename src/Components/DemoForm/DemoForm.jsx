import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as yup from "yup";
import classes from './DemoForm.module.css';

const MyTextInput = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes[`${size}Wrap`]}>
      <input className={classes.item} {...field} {...props} />
      <label htmlFor={props.id || props.name} className={classes.label}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes[`${size}Wrap`]}>
      <select className={classes.item} {...field} {...props} />
      <label htmlFor={props.id || props.name} className={classes.label}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, size, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes[`${size}Wrap`]}>
      <textarea className={classes.item + ' ' + classes.areaItem} {...field} {...props} />
      <label htmlFor={props.id || props.name} className={classes.label}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, className = '', ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <input type="checkbox" {...field} {...props} />
      <p className={className}>{children}</p>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const DemoForm = ({ categories, countries, languages, industries, getFormData }) => {
  useEffect(() => getFormData(), []);

  const validationSchema = yup.object({
    company_name: yup.string().required(),
  });


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
            markets: '',
            lang: '',
            industry: '',
            message: '',
            check: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            // make async call
            console.log("submit: ", data);
            setSubmitting(false);
          }}
        >{({ isSubmitting }) => (
          <Form className={classes.form}>
            <h3 className={classes.subtitle}>Юридическое лицо</h3>
            <div className={classes.block}>
              <MyTextInput label="Название юридического лица*" size="large" name="company_name" type="text" />
              <MySelect label="Категория*" size="short" name="category" />
              <MySelect label="Страна*" size="short" name="country" />
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
              <MySelect label="Целевые рынки*" size="short" name="markets" />
              <MySelect label="Предпочтительный язык*" size="short" name="lang" />
              <MySelect label="Интересующие отрасли*" size="large" name="industry" />
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
