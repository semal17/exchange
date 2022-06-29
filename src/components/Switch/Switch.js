import { useTranslation } from "react-i18next";
import { useState } from "react";

import "./Switch.css";

function Switch() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("ru");

  let handleChange = () => {
    if (lang === "en") {
      setLang("ru");
      i18n.changeLanguage("ru");
    } else {
      setLang("en");
      i18n.changeLanguage("en");
    }
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={lang === "en"} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  );
}

export default Switch;
