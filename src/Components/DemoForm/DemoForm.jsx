import React, { useEffect } from 'react';
import classes from './DemoForm.module.css';

const DemoForm = ({ categories, countries, languages, industries, getFormData }) => {
  useEffect(() => getFormData(), []);

  return (
    <section className={classes.demoForm}>
      <h1 className={classes.sectionTitle}>Запросить демо-доступ</h1>
      <p className={classes.discription}>Доступ к платформе возможен исключительно для представителей юридических лиц или индивидуальных предпринимателей</p>
      <div className={classes.formWrap}>
        <h2 className={classes.formTitle}>Заполните контактные данные</h2>
        <form className={classes.form}>

          <h3 className={classes.subtitle}>Юридическое лицо</h3>
          <div className={classes.block}>
            <div className={classes.largeWrap}>
              <input className={classes.item} type="text" />
              <label className={classes.label}>Название юридического лица*</label>
            </div>
            <div className={classes.shortWrap}>
              <select className={classes.item} name="category"></select>
              <label className={classes.label}>Категория*</label>
            </div>
            <div className={classes.shortWrap}>
              <select className={classes.item} name="country"></select>
              <label className={classes.label}>Страна*</label>
            </div>
          </div>

          <h3 className={classes.subtitle}>Представитель юридического лица</h3>
          <div className={classes.block}>
            <div className={classes.shortWrap}>
              <input className={classes.item} type="text" />
              <label className={classes.label}>Имя*</label>
            </div>
            <div className={classes.shortWrap}>
              <input className={classes.item} type="text" />
              <label className={classes.label}>Фамилия*</label>
            </div>
            <div className={classes.shortWrap}>
              <input className={classes.item} type="text" />
              <label className={classes.label}>Должность*</label>
            </div>
            <div className={classes.shortWrap}>
              <input className={classes.item} type="text" />
              <label className={classes.label}>Ваш корпоративный e-mail*</label>
            </div>
          </div>

          <h3 className={classes.subtitle}>Профессиональные интересы</h3>
          <div className={classes.block}>
            <div className={classes.shortWrap}>
              <select className={classes.item} name="markets"></select>
              <label className={classes.label}>Целевые рынки*</label>
            </div>
            <div className={classes.shortWrap}>
              <select className={classes.item} name="lang"></select>
              <label className={classes.label}>Предпочтительный язык*</label>
            </div>
            <div className={classes.largeWrap}>
              <select className={classes.item} name="interests"></select>
              <label className={classes.label}>Интересующие отрасли*</label>
            </div>
            <div className={classes.largeWrap}>
              <textarea className={classes.item + ' ' + classes.areaItem} name="message"></textarea>
              <label className={classes.label}>Сообщение</label>
            </div>
          </div>

          <div className={classes.block}>
            <input type="checkbox" name="check" />
            <p className={classes.confirmation}>Подтверждаю, что являюсь уполномоченным представителем указанного юридического лица или индивидуального предпринимателя</p>
          </div>

          <div className={classes.line}></div>

          <div className={classes.block}>
            <div className={classes.shortWrap}>
              <p className={classes.conditions}>Нажимая кнопку “Запросить демо-доступ” вы принимаете <a href="#">пользовательское соглашение</a> и согласны с <a href="#">правилами использования и обработки персональных данных</a></p>
            </div>
            <div className={classes.shortWrap}>
              <button className={classes.btn}>Отправить заявку</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default DemoForm;
