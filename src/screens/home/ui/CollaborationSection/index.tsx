"use client";
import { FC } from "react";

import styles from "./CollaborationSection.module.scss";

import { collaborationsData } from "../../data/collaborations.data";

import Star from "@/shared/ui/Star";
import PlanetCanvas from "@/screens/home/ui/CollaborationSection/PlanetCanvas";

const CollaborationSection: FC = () => {
  return (
    <section className={styles.section}>
      <hgroup>
        <h2>Collaboration</h2>
        <h3>
          Unlimited Possibility, <br /> Unlimited Collaboration
        </h3>
      </hgroup>
      <ul>
        {collaborationsData.map((collaboration) => (
          <li key={collaboration}>
            <span>
              <Star />
            </span>
            {collaboration}
          </li>
        ))}
      </ul>
      <PlanetCanvas />
    </section>
  );
};

export default CollaborationSection;
