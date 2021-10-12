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
          <div className={classes.largeWrap}>
            <input className={classes.item} type="text" />
          </div>
          <div className={classes.shortWrap}>
            <select className={classes.item} name="category"></select>
          </div>
          <div className={classes.shortWrap}>
            <select className={classes.item} name="country"></select>
          </div>
        </div>

        <h3 className={classes.subtitle}>Представитель юридического лица</h3>
        <div className={classes.block}>
          <div className={classes.shortWrap}>
            <input className={classes.item} type="text" />
          </div>
          <div className={classes.shortWrap}>
            <input className={classes.item} type="text" />
          </div>
          <div className={classes.shortWrap}>
            <input className={classes.item} type="text" />
          </div>
          {/* <div className={classes.shortWrap}>
            <input className={classes.item} type="text" />
          </div> */}
        </div>

        <h3 className={classes.subtitle}>Профессиональные интересы</h3>
        <div className={classes.block}>
          {/* потом удалить */}
          <div className={classes.shortWrap}>
            <input className={classes.item} type="text" />
          </div>
          <div className={classes.shortWrap}>
            <select className={classes.item} name="markets"></select>
          </div>
          <div className={classes.shortWrap}>
            <select className={classes.item} name="lang"></select>
          </div>
          <div className={classes.largeWrap}>
            <select className={classes.item} name="interests"></select>
          </div>
          <div className={classes.largeWrap}>
            <textarea className={classes.item + ' ' + classes.areaItem} name="message"></textarea>
          </div>
        </div>

        <div className={classes.block}>
          <input type="checkbox" name="check" />
          <p className={classes.confirmation}>Подтверждаю, что являюсь уполномоченным представителем указанного юридического лица или индивидуального предпринимателя</p>
        </div>

        <div className={classes.line}></div>

        <div className={classes.block}>
          <div className={classes.shortWrap}>
            <button className={classes.btn}>Отправить заявку</button>
          </div>
          <div className={classes.shortWrap}>
            <p className={classes.conditions}>Нажимая кнопку “Запросить демо-доступ” вы принимаете <a href="#">пользовательское соглашение</a> и согласны с <a href="#">правилами использования и обработки персональных данных</a></p>
          </div>
        </div>
      </form>
    </section>
  )
}

export default DemoForm;