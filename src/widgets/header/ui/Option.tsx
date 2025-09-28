import { LanguageSwitcher } from "@/features/language-switcher";
import { ThemeChanger } from "@/features/theme";
import { memo } from "react";
import { LoginBtn } from "../../../features/login-btn";

export const Option = memo(() => {
  return (
    <div className="flex gap-2 items-center">
      <LanguageSwitcher />
      <ThemeChanger />
      <LoginBtn />
    </div>
  );
});
