import React from "react";
import './welcomePage.scss';
import {useTranslation} from 'react-i18next';
import LanguageList from "../LanguageList/languageList";

function WelcomePage() {
  const {t,i18n} = useTranslation();
  return (
    <div>
      <p>{t("pages.mainpage.welcome")} Can Aykut</p>
      <LanguageList/>

    </div>
  );
}

export default WelcomePage;
