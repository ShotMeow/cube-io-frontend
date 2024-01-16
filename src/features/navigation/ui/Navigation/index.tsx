import type { FC } from "react";

import styles from "./Navigation.module.scss";

import { navigationItems } from "../../data/navigation.data";
import NavigationItem from "../NavigationItem";

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {navigationItems.map((item) => (
          <NavigationItem {...item} key={item.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
