import type { FC } from "react";

import styles from "./SolutionsSection.module.scss";

import { solutionsData } from "../../data/solutions.data";
import SolutionCard from "./SolutionCard";

const SolutionsSection: FC = () => {
  return (
    <section className={styles.section}>
      <hgroup>
        <h2>Solutions</h2>
        <h3>
          Everything a 3D Software <br /> Workflow Needs
        </h3>
      </hgroup>
      <div className={styles.solutions}>
        {solutionsData.map((solution) => (
          <SolutionCard key={solution.heading} {...solution} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
