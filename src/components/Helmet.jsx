import React from "react";
import { Helmet } from "react-helmet-async"; // react-helmet-async importu
import { useTranslation } from "react-i18next";

const MultiLanguageHelmet = ({ titleKey, descriptionKey }) => {
  const { t } = useTranslation();

  // Çeviriler
  const title = t(titleKey, { defaultValue: "Default Title" });
  const description = t(descriptionKey, { defaultValue: "Default description." });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default MultiLanguageHelmet;
