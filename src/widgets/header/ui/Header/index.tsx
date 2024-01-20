import type { FC } from "react";

import styles from "./Header.module.scss";

import Logo from "@/shared/ui/Logo";
import { Navigation } from "@/features/navigation";
import Button from "@/shared/ui/Button";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.other}>
        <Navigation />
        <div className={styles.actions}>
          <Button variant="stroke">Log In</Button>
          <Button variant="fill">Get Started</Button>
        </div>
      </div>
      <div className={styles.burger}>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Header;
