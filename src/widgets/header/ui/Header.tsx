import { memo } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Option } from "./Option";

import { MenuHeader } from "./MenuHeader";

export const Header = memo(() => {
  return (
    <header>
      <nav className="container relative flex  justify-center items-center h-20">
        <Logo />
        <MenuHeader />
        <Navigation />
        <Option />
      </nav>
    </header>
  );
});
