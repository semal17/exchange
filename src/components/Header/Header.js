import { useTranslation } from "react-i18next";

import Switch from "../Switch/Switch";

import "./Header.css";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__wrapper  container">
        <h1 className="header__title">{t("description.name")}</h1>
        <Switch />
      </div>
    </header>
  );
}

export default Header;
