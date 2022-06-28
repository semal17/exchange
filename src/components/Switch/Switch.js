import { useTranslation } from "react-i18next";
import { useState } from "react";

import "./Switch.css";

function Switch() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("ru");

  return (
    <label className="switch">
      <input type="checkbox" />
      <span
        className="slider"
        id={lang}
        onClick={(e) => {
          if (e.target.id === "en") {
            setLang("ru");
            i18n.changeLanguage("ru")
          } else {
            setLang("en");
            i18n.changeLanguage("en")
          }
        }
        }
      ></span>
    </label>
  );
}

export default Switch;
