import { memo } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Option } from "./Option";

import { MenuHeader } from "./MenuHeader";

export const Header = memo(() => {
  return (
    <header className="border border-gray-900">
      <nav className="container relative flex justify-between items-center h-18">
        <Logo />
        <MenuHeader />
        <Navigation />
        <Option />
      </nav>
    </header>
  );
});
