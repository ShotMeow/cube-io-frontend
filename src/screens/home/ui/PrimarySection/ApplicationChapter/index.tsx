"use client";

import { type FC, useRef } from "react";

import styles from "./ApplicationChapter.module.scss";
import Image from "next/image";
import Glow from "@/shared/ui/Glow";

import appImage from "@/shared/assets/images/application.webp";
import { useScroll } from "framer-motion";

const ApplicationChapter: FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

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
