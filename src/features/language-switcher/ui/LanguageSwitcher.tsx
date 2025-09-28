import { Select } from "antd";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const languageOptions = [
    {
      value: "uz",
      label: (
        <span className="flex items-center">
          <ReactCountryFlag countryCode="UZ" svg />
        </span>
      ),
    },
    {
      value: "en",
      label: (
        <span className="flex items-center">
          <ReactCountryFlag countryCode="GB" svg />
        </span>
      ),
    },
    {
      value: "ru",
      label: (
        <span className="flex items-center">
          <ReactCountryFlag countryCode="RU" svg />
        </span>
      ),
    },
  ];

  return (
    <Select
      optionLabelProp="label"
      defaultValue={i18n.language}
      onChange={handleChange}
      options={languageOptions}
      className="lang-select"
      dropdownStyle={{ borderRadius: "12px" }}
      style={{
        width: 60,
        borderRadius: "9999px",
        height: 33,
        display: "flex",
        alignItems: "center",
      }}
    />
  );
});
