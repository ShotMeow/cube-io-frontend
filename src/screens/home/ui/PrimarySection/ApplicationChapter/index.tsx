"use client";

import { type FC } from "react";
import Image from "next/image";

import styles from "./ApplicationChapter.module.scss";
import Glow from "@/shared/ui/Glow";

import appImage from "@/shared/assets/images/application.webp";

const ApplicationChapter: FC = () => {
  return (
    <div className={styles.application}>
      <Image
        src={appImage}
        alt="Application Image"
        priority
        placeholder="blur"
      />
      <Glow />
    </div>
  );
};

export default ApplicationChapter;
