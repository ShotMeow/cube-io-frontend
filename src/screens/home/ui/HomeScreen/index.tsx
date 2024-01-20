import type { FC } from "react";
import styles from "./HomeScreen.module.scss";

import PrimarySection from "../PrimarySection";
import SolutionsSection from "../SolutionsSection";

const HomeScreen: FC = () => {
  return (
    <main className={styles.main}>
      <PrimarySection />
      <SolutionsSection />
    </main>
  );
};

export default HomeScreen;
