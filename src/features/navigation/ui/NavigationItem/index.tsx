import type { FC } from "react";
import Link from "next/link";

import styles from "./NavigationItem.module.scss";

import NavigationItemDropdown from "../NavigationItemDropdown";
import { NavigationItemType } from "../../types/navigation.types";
import Arrow from "@/shared/ui/Arrow";

interface Props extends NavigationItemType {}

const NavigationItem: FC<Props> = ({ href, title, inner }) => {
  return (
    <li className={styles.item}>
      {inner ? (
        <button>
          <span>{title}</span>
          {inner && <Arrow />}
        </button>
      ) : (
        <Link href={href}>{title}</Link>
      )}
      {inner && (
        <div>
          <NavigationItemDropdown dropdownItems={inner} />
        </div>
      )}
    </li>
  );
};

export default NavigationItem;
