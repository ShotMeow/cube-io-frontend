import type { FC } from "react";
import Link from "next/link";

import styles from "./Footer.module.scss";
import X from "@/widgets/footer/assets/icons/X";
import Discord from "@/widgets/footer/assets/icons/Discord";
import Instagram from "@/widgets/footer/assets/icons/Instagram";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 - cube.io</p>
      <ul>
        <li>
          <Link href="#" aria-label="X Social Link">
            <X />
          </Link>
        </li>
        <li>
          <Link href="#" aria-label="Discord Link">
            <Discord />
          </Link>
        </li>
        <li>
          <Link href="#" aria-label="Instagram Link">
            <Instagram />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
