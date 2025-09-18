import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "हिंदी" },
  { code: "rj", lang: "राजस्थानी" }
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div class="dropdown">
        <button class="dropbtn">English</button>
        <div class="dropdown-content">
          <div className="btn-container">
            {languages.map((lng) => {
              return (
                <button
                  className={lng.code === i18n.language ? "selected" : ""}
                  key={lng.code}
                  onClick={function () {
                    changeLanguage(lng.code);
                    document.querySelector(".dropbtn").textContent = lng.lang
                  }
                  }
                >
                  {lng.lang}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="btn-container">
        {languages.map((lng) => {
          return (
            <button
              className={lng.code === i18n.language ? "selected" : ""}
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </button>
          );
        })}
      </div> */}
    </>
  );
};

export default LanguageSelector;