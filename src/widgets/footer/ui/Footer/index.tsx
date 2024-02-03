import type { FC } from "react";
import Link from "next/link";

import styles from "./Footer.module.scss";

import XIcon from "@/shared/assets/icons/XIcon";
import InstagramIcon from "@/shared/assets/icons/InstagramIcon";
import DiscordIcon from "@/shared/assets/icons/DiscordIcon";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 - cube.io</p>
      <ul>
        <li>
          <Link href="#" aria-label="XIcon Social Link">
            <XIcon />
          </Link>
        </li>
        <li>
          <Link href="#" aria-label="Discord Link">
            <DiscordIcon />
          </Link>
        </li>
        <li>
          <Link href="#" aria-label="Instagram Link">
            <InstagramIcon />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
