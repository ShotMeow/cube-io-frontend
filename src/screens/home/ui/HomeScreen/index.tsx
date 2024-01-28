import type { FC } from "react";
import styles from "./HomeScreen.module.scss";

import PrimarySection from "../PrimarySection";
import SolutionsSection from "../SolutionsSection";
import CollaborationSection from "../CollaborationSection";
import IntegrateSection from "../IntegrateSection";
import CommunitySection from "../CommunitySection";

const HomeScreen: FC = () => {
  return (
    <main className={styles.main}>
      <PrimarySection />
      <SolutionsSection />
      <CollaborationSection />
      <IntegrateSection />
      <CommunitySection />
    </main>
  );
};

export default HomeScreen;
