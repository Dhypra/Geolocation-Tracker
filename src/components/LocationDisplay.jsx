import React from "react";
import  useGeolocation  from "../hooks/useGeolocation";
import MapView from "./MapView";
import { useTranslation } from "react-i18next";

export default function LocationDisplay() {
  const { t } = useTranslation();
  const { position, error } = useGeolocation();

  return (
    <div className="card">
      <h2>{t("current_location")}</h2>

      {error && <p className="error">❌ {t("error")}</p>}
      {!position && !error && <p className="status">📡 {t("loading")}</p>}

      {position && (
        <>
          <ul>
            <li><strong>{t("latitude")}:</strong> {position.latitude}</li>
            <li><strong>{t("longitude")}:</strong> {position.longitude}</li>
            <li><strong>{t("accuracy")}:</strong> ±{position.accuracy} m</li>
          </ul>
          <MapView position={position} />
        </>
      )}
    </div>
  );
}
