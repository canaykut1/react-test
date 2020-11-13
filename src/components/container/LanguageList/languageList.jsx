import React,{useEffect,useState} from "react";
import Languages from "../Languages/languages";
import LanguageField from "../LangugeField/languageField";
import SelectBox from "devextreme-react/select-box";
import "./languageList.scss";
import { useTranslation } from "react-i18next";

function LanguageList() {
  const { t, i18n } = useTranslation();
  const langs = [
    {
      id: "en",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png",
      name: "English",
    },
    {
      id: "tr",
      imageSrc:
        "https://cdn.countryflags.com/thumbs/turkey/flag-button-round-250.png",
      name: "Turkish",
    },
    {
      id: "es",
      imageSrc:
        "https://cdn.countryflags.com/thumbs/spain/flag-button-round-250.png",
      name: "Spanish",
    },
  ];
  const [defLng, setdefLng] = useState(localStorage.getItem("i18nextLng")||"tr");


  const handleLanguageChanged = (data) => {
    i18n.changeLanguage(data.value);
    setdefLng(data.value);

  };
  return (
    <SelectBox
      id='custom-templates'
      dataSource={langs}
      displayExpr='Name'
      valueExpr='id'
      defaultValue={defLng}
      fieldRender={LanguageField}
      itemRender={Languages}
      width={150}
      onValueChanged={handleLanguageChanged}
    />
  );
}

export default LanguageList;
