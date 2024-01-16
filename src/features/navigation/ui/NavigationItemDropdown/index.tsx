import type { FC } from "react";

import styles from "./NavigationItemDropdown.module.scss";

import NavigationItem from "../NavigationItem";
import { NavigationItemType } from "../../types/navigation.types";

interface Props {
  dropdownItems: NavigationItemType[];
}

const NavigationItemDropdown: FC<Props> = ({ dropdownItems }) => {
  return (
    <ul className={styles.dropdown}>
      {dropdownItems.map((item) => (
        <NavigationItem {...item} key={item.href} />
      ))}
    </ul>
  );
};

export default NavigationItemDropdown;
