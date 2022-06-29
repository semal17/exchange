import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../components/Header/Header";

import "./Info.css";

function Info({ items }) {
  const [arr, setArr] = useState(items);
  const { t } = useTranslation();

  useEffect(() => {
    setArr(items);
  }, [items]);

  if (arr.length === 0) {
    return (
      <>
        <Header />
        <main className="container">
          <Link className="info__link" to="/">
            {t("description.back")}
          </Link>
          <h2 className="info__title">
            {t("description.caption")}{" "}
            <Link className="info__back" to="/">
              {t("description.caption2")}
            </Link>
          </h2>
        </main>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main className="container">
          <Link className="info__link" to="/">
            {t("description.back")}
          </Link>
          <h2 className="info__title">{t("description.all")}</h2>
          <ul className="info__list">
            <li className="info__item">
              {arr.rates.RUB.toFixed(5)} RUB {t("description.for")} 1 ADM
            </li>
            <li className="info__item">
              {arr.rates.EUR.toFixed(5)} EUR {t("description.for")} 1 ADM
            </li>
            <li className="info__item">
              {arr.rates.USD.toFixed(5)} USD {t("description.for")} 1 ADM
            </li>
            <li className="info__item">
              {arr.rates.GBP.toFixed(5)} GBP {t("description.for")} 1 ADM
            </li>
            <li className="info__item">
              {arr.rates.CHF.toFixed(5)} CHF {t("description.for")} 1 ADM
            </li>
            <li className="info__item">
              {arr.rates.CNY.toFixed(5)} CNY {t("description.for")} 1 ADM
            </li>
            <li className="info__item">
              {arr.rates.NOK.toFixed(5)} NOK {t("description.for")} 1 ADM
            </li>
            <li className="info__item">
              {arr.rates.TRY.toFixed(5)} TRY {t("description.for")} 1 ADM
            </li>
            <li className="info__item">
              {arr.rates.UAH.toFixed(5)} UAH {t("description.for")} 1 ADM
            </li>
            <li className="info__item">
              {arr.rates.CAD.toFixed(5)} CAD {t("description.for")} 1 ADM
            </li>
          </ul>
        </main>
      </>
    );
  }
}

export default Info;
