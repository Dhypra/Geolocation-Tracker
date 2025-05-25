import React from "react";
import "./App.css";
import LocationDisplay from "./components/LocationDisplay";
// import useTranslation from "react-i18next";
import { useTranslation } from "react-i18next";
import "./i18n/index"

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="container">
      <h1>{t("title")}</h1>

      <div style={{ justifyContent: "center", display: "flex" ,gap:"30px"}}>
        <button onClick={() => changeLanguage("id")}>🇮🇩 Indonesia</button>{" "}
        <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
      </div>

      <LocationDisplay />
    </div>
  );
}

export default App;
