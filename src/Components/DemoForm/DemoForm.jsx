import React from 'react';
import classes from './DemoForm.module.css';

const DemoForm = (props) => {
  return (
    <section className={classes.demoForm}>
      <h1 className={classes.sectionTitle}>Запросить демо-доступ</h1>
      <p className={classes.discription}>Доступ к платформе возможен исключительно для представителей, юридических лиц или индивидуальных предпринимателей</p>
      <h2 className={classes.formTitle}>Заполните контактные данные</h2>
      <form className={classes.form}>

        <h3 className={classes.subtitle}>Юридическое лицо</h3>
        <div className={classes.block}>
          <input className={classes.item} type="text" />
          <select className={classes.item} name="category"></select>
          <select className={classes.item} name="country"></select>
        </div>

        <h3 className={classes.subtitle}>Представитель юридического лица</h3>
        <div className={classes.block}>
          <input className={classes.item} type="text" />
          <input className={classes.item} type="text" />
          <input className={classes.item} type="text" />
        </div>

        <h3 className={classes.subtitle}>Профессиональные интересы</h3>
        <div className={classes.block}>
          <input className={classes.item} type="text" />
          <select className={classes.item} name="markets"></select>
          <select className={classes.item} name="lang"></select>
          <select className={classes.item} name="interests"></select>
          <textarea name="message"></textarea>
        </div>

        <div className={classes.block}>
          <input type="checkbox" name="check" />
          <p className={classes.confirmation}>Подтверждаю, что являюсь уполномоченным представителем указанного юридического лица или индивидуального предпринимателя</p>
        </div>

        <div className={classes.line}></div>

        <div className={classes.block}>
          <p className={classes.conditions}>Нажимая кнопку “Запросить демо-доступ” вы принимаете пользовательское соглашение и согласны с правилами использования и обработки персональных данных</p>
          <button className={classes.btn}>Отправить заявку</button>
        </div>
      </form>
    </section>
  )
}

export default DemoForm;