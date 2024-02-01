"use client";
import { type FC, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import classNames from "classnames";

import styles from "./Header.module.scss";
import HeaderDropdown from "../HeaderDropdown";

import Logo from "@/shared/ui/Logo";
import { Navigation } from "@/features/navigation";
import Button from "@/shared/ui/Button";
import { useIntersection } from "@/shared/hooks/useIntersection";

const Header: FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isIntersecting = useIntersection(ref);

  const [dropdownShown, setDropdownShown] = useState<boolean>(false);

  return (
    <header ref={ref} className={styles.header}>
      <div
        className={classNames(
          {
            [styles.intersection]: !isIntersecting,
            [styles.hide]: dropdownShown,
          },
          styles.interlayer,
        )}
      >
        <div className={styles.inner}>
          <Logo />
          <div className={styles.other}>
            <Navigation />
            <div className={styles.actions}>
              <Button variant="stroke">Log In</Button>
              <Button variant="fill">Get Started</Button>
            </div>
          </div>
          <button
            onClick={() => setDropdownShown(true)}
            className={styles.burger}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {dropdownShown && (
          <HeaderDropdown setDropdownShown={setDropdownShown} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
