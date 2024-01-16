import type { FC } from "react";
import Link from "next/link";

import styles from "./NavigationItem.module.scss";

import NavigationItemDropdown from "../NavigationItemDropdown";
import { NavigationItemType } from "../../types/navigation.types";

interface Props extends NavigationItemType {}

const NavigationItem: FC<Props> = ({ href, title, inner }) => {
  return (
    <li className={styles.item}>
      <Link href={href}>
        <span>{title}</span>
        {inner && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
          >
            <path
              d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 5L7 8L9 8L9 5L7 5Z"
              fill="currentColor"
            />
          </svg>
        )}
      </Link>
      {inner && (
        <span>
          <NavigationItemDropdown dropdownItems={inner} />
        </span>
      )}
    </li>
  );
};

export default NavigationItem;
