import type { FC } from "react";
import styles from "./HomeScreen.module.scss";

import PrimarySection from "../PrimarySection";

const HomeScreen: FC = () => {
  return (
    <main className={styles.main}>
      <PrimarySection />
    </main>
  );
};

export default HomeScreen;
