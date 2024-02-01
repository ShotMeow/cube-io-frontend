"use client";
import { FC, useRef } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import classNames from "classnames";

import styles from "./SolutionCard.module.scss";

import { SolutionType } from "../../../types/solutions.types";

import Grid from "@/shared/ui/Grid";
import Glow from "@/shared/ui/Glow";
import { useIntersection } from "@/shared/hooks/useIntersection";

interface Props extends SolutionType {}

const SolutionCard: FC<Props> = ({ imageSrc, description, heading }) => {
  const ref = useRef<HTMLElement>(null);
  const isIntersecting = useIntersection(ref);

  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  const onMouseMove = ({ currentTarget, clientX, clientY }: any) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      className={classNames(
        {
          [styles.intersection]: isIntersecting,
        },
        styles.card,
      )}
    >
      <div className={styles.cursor}>
        <div />
        <motion.div style={style} />
        <motion.div style={style} />
      </div>
      <Grid className={styles.grid} size="small" />
      <Image src={imageSrc} alt={heading} />
      <h4>{heading}</h4>
      <p>{description}</p>
      <Glow className={styles.glow} />
    </article>
  );
};

export default SolutionCard;
