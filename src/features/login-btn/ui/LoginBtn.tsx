import { memo } from "react";
import { useTranslation } from "react-i18next";

export const LoginBtn = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      <button className="bg-red-600 text-white p-2 px-3 md:p-3 md:px-12 text-[20px] rounded-[10px]">
        {t("button.login")}
      </button>
    </div>
  );
});
