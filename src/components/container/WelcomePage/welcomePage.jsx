import React from "react";
import './welcomePage.scss';
import {useTranslation} from 'react-i18next';
import LanguageList from "../LanguageList/languageList";

function WelcomePage() {
  const {t,i18n} = useTranslation();
  return (
    <div>
      <h1>{t("pages.mainpage.welcome")}</h1>
      <LanguageList/>

    </div>
  );
}

export default WelcomePage;
