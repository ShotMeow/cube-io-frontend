import type { FC } from "react";

import styles from "./Header.module.scss";

import Logo from "@/shared/ui/Logo";
import { Navigation } from "@/features/navigation";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
