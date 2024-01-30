"use client";
import { type FC, useEffect, useRef, useState } from "react";

import styles from "./Header.module.scss";

import Logo from "@/shared/ui/Logo";
import { Navigation } from "@/features/navigation";
import Button from "@/shared/ui/Button";
import classNames from "classnames";

const Header: FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref} className={styles.header}>
      <div
        className={classNames(
          {
            [styles.intersection]: !isIntersecting,
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
          <div className={styles.burger}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
