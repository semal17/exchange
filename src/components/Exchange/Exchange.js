import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import "./Exchange.css";

function Exchange({ items, setItems }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [usd, setUsd] = useState(0.002374);
  const [eur, setEur] = useState(0.00224);
  const [gbp, setGbp] = useState(0.001933);
  const [chf, setChf] = useState(0.002268);
  const [pick, setPick] = useState(0.002374);
  const [value, setValue] = useState(0);
  const [name, setName] = useState("USD");
  const [date, setDate] = useState(new Date());
  const { t } = useTranslation();

  const onButton = (e) => {
    if (e.target.innerHTML === "USD") {
      setName("USD");
      setPick(usd);
      console.log('Была нажата кнопка USD');
    } else if (e.target.innerHTML === "EUR") {
      setName("EUR");
      setPick(eur);
      console.log('Была нажата кнопка EUR');
    } else if (e.target.innerHTML === "GBP") {
      setName("GBP");
      setPick(gbp);
      console.log('Была нажата кнопка GBP');
    } else {
      setName("CHF");
      setPick(chf);
      console.log('Была нажата кнопка CHF');
    }
  };

  const onChangeInput = (e) => {
    setValue(+e.target.value);
    console.log('Была изменена сумма обмена');
  };

  useEffect(() => {
    fetch(
    // "https://api.apilayer.com/fixer/latest?apikey=mJs7VloEVx3C0pVyKwLQOLxEE8giQFDV&base=AMD"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setEur(result.rates.EUR);
          setUsd(result.rates.USD);
          setGbp(result.rates.GBP);
          setChf(result.rates.CHF);
          setPick(result.rates.USD);
          setDate(new Date());
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          setItems([]);
        }
      );
  }, []);

//если ошибка на сервере
  if (error) {
    return (
      <section className="exchange container">
        <div className="exchange__wrapper">
          <h2 className="exchange__title">{t('description.title')}</h2>
          
          <div className="form">
            <div className="form__group field">
              <input
                required=""
                placeholder={t('description.enter')}
                className="form__field"
                type="number"
                onInput={onChangeInput}
              />
              <label className="form__label" htmlFor="name">
              {t('description.enter')}
              </label>
            </div>

            <span className="form__name">{name}</span>
          </div>

          <ul className="exchange__list">
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                USD
              </button>
            </li>
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                EUR
              </button>
            </li>
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                GBP
              </button>
            </li>
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                CHF
              </button>
            </li>
          </ul>
        </div>

        <div className="exchange__wrapper">
          <h2 className="exchange__title">{t('description.get')}</h2>
          <p className="exchange__text">
          {t('description.error')} {error.message}
            <br />
            {t('description.fix')}
          </p>
        </div>
      </section>
    );
  } 
  //если еще загружается
  else if (!isLoaded) {
    return (
      <section className="exchange container">
        <div className="exchange__wrapper">
          <h2 className="exchange__title">{t('description.title')}</h2>
          <div className="form">
            <div className="form__group field">
              <input
                required=""
                placeholder={t('description.enter')}
                className="form__field"
                type="number"
                onInput={onChangeInput}
              />
              <label className="form__label" htmlFor="name">
              {t('description.enter')}
              </label>
            </div>

            <span className="form__name">{name}</span>
          </div>

          <ul className="exchange__list">
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                USD
              </button>
            </li>
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                EUR
              </button>
            </li>
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                GBP
              </button>
            </li>
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                CHF
              </button>
            </li>
          </ul>
        </div>

        <div className="exchange__wrapper">
          <h2 className="exchange__title">{t('description.get')}</h2>

          <p className="exchange__text">{t('description.load')}</p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="exchange container">
        <div className="exchange__wrapper">
          <h2 className="exchange__title">{t('description.title')}</h2>
          <div className="form">
            <div className="form__group field">
              <input
                required=""
                placeholder={t('description.enter')}
                className="form__field"
                type="number"
                onInput={onChangeInput}
              />
              <label className="form__label" htmlFor="name">
              {t('description.enter')}
              </label>
            </div>

            <span className="form__name">{name}</span>
          </div>

          <ul className="exchange__list">
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                USD
              </button>
            </li>
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                EUR
              </button>
            </li>
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                GBP
              </button>
            </li>
            <li className="exchange__item">
              <button className="exchange__button" onClick={onButton}>
                CHF
              </button>
            </li>
          </ul>
        </div>

        <div className="exchange__wrapper">
          <h2 className="exchange__title">{t('description.get')}</h2>
          <p className="exchange__caption">
            {pick} {name} {t('description.for')} 1 AMD
          </p>
          <p className="exchange__text">
          {t('description.total')} {(value / pick).toFixed(2)} AMD
          </p>
          <div>
            <p className="exchange__date">
            {t('description.actualy')}{" "}
              {date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}.
              {date.getMonth() > 9
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`}
              .{date.getFullYear()}
            </p>
            <Link className="exchange__link" to="/info" onClick={() => console.log('Была нажата ссылка для перехода')}>
            {t('description.more')}
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Exchange;
